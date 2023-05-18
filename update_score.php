<?php
    session_start();

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "form";

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    $sql = "SELECT * FROM scoreboard";
    $stmt = $conn->query($sql);

    while($row = $stmt->fetch_assoc()){
        $sql = "UPDATE scoreboard SET score = ? WHERE team = '" . $row['team'] . "'";
        $prep = $conn->prepare($sql);
        $prep->bind_param('i', $_POST[$row['team'] . '_score']);
        $result = $prep->execute();
    }
    header("Location: scoreboard.php");
?>