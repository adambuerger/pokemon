<?php
    session_start();
    if($_SESSION['logged_in'] != true){
        echo "Error: please login.";
        exit();
    }

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link href="stylesheet.css" rel="stylesheet">
        <title>Table</title>
    </head>
    <header>
        <h1><a href='table.php'><img src='TemaIsenmann.png' height='100' width='100' title='Home'></a>
        <a href='table.php'>Home</a> | 
        <a href='scoreboard.php'>Scoreboard</a> | </h1>
    </header>
    <body>
        <div class="wrapper">
            <div class="table">
                <table>
                    <tr>
                        <th>username</th>
                        <th>email</th>
                        <th>team</th>
                        <th colspan=2></th>
                    </tr>
                    <?php
                        $conn = mysqli_connect("localhost", "root", "", "form");
                        $sql = "SELECT id, username, email, Team from users";
                        $stmt = $conn->query($sql);
                        if($stmt->num_rows > 0){
                            while($row = $stmt->fetch_assoc()){
                                echo "<tr><td>" . $row["username"] . "</td>
                                    <td>" . $row["email"] ."</td>
                                    <td>" . $row['Team'] . "</td>
                                    <td width='30'><a href='edit.php?id= " . $row["id"] . "'><img src='edit.png' width='20' height='20' title='Edit'></a></td>
                                    <td width='30'><a href='delete.php?id=" . $row["id"] . "'><img src='X.png' width='15' height='15' title='Remove'></a></td>
                                </tr>";
                            }
                        }
                    ?>
                    <tr><td colspan=5><a href='register.html'><img src='plus.png' width='15' height='15'>Add New User</a></td></tr>
                </table>
            </div>
        </div>
    </body>
</html>