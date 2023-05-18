<?php
    session_start();
    if($_SESSION['logged_in'] != true){
        echo "Error: please login.";
        exit();
    }
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "form";

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    $sql = "SELECT * FROM scoreboard ORDER BY score DESC";
    $stmt = $conn->query($sql);

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link href="stylesheet.css" rel="stylesheet">
        <title>Scoreboard</title>
    </head>
    <header>
        <h1><a href='table.php'><img src='TemaIsenmann.png' height='100' width='100' style='align:left'></a>
        <a href='table.php'>Home</a> | 
        <a href='scoreboard.php'>Scoreboard</a> | </h1>
    </header>
    <body>
        <form action='update_score.php' method='POST'>
        <table>
            <tr>
                <th>Team</th>
                <th>Score</th>
            </tr>
            <?php
                if($stmt->num_rows > 0){
                    while($row = $stmt->fetch_assoc()){
                        echo "<tr><td>" . $row["team"] . "</td>
                            <td><input type='number' name='" . $row['team'] ."_score' placeholder='score' id='score' value='" . $row['score'] . "'required><br></td>
                        </tr>";
                    }
                }
            ?>
            <tr>
                <td colspan='2'>
                    <input type="submit" value="Update">
                </td>
            </tr>
        </table>
        </form>
    </body>
</html>