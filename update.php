<?php
    session_start();

    $id = $_POST["id"];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "form";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    $sql = "UPDATE users SET username = ?, email = ?, Team = ? WHERE id = " . $_POST["id"];
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sss', $_POST['username'], $_POST['email'], $_POST['team']);
    $result = $stmt->execute();
    header("Location: table.php");
?>