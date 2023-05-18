<?php
    session_start();

    $id = $_GET["id"];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "form";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    $sql = "SELECT * FROM users WHERE id =" . $id;
    $stmt = $conn->query($sql);

    $row = $stmt->fetch_assoc();

?>
<html>
    <head>
        <meta charset="utf-8">
        <link href="stylesheet.css" rel="stylesheet">
        <title>Edit Existing User</title>
    </head>
    <header>
        <h1><a href='table.php'><img src='TemaIsenmann.png' height='100' width='100' title='Home'></a>
        <a href='table.php'>Home</a> | 
        <a href='scoreboard.php'>Scoreboard</a> | </h1>
    </header>
    <body>
        <form action="update.php" method="post">
            <?php
            echo "<label for='username'> </label>";
            echo "<input type='text' name='username' placeholder='Username' id='username' value='" . $row['username'] . "'required> <br>";
            echo "<label for='email'> </label>";
            echo "<input type='email' name='email' placeholder='Email' id='email' value='" . $row['email'] . "'required><br>";
            echo "<select name='team'>
                    <option value='Red'>Red</option>
                    <option value='Green'>Green</option>
                    <option value='Blue'>Blue</option>
                    <option value='Yellow'>Yellow</option>
                </select>";
            echo "<input type='hidden' name='id' value=" . $id . ">";
            echo "<input type='submit' value='Confirm'>";
            ?>
        </form>
    </body>
</html>