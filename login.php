<?php
    session_start();
    $host = 'localhost';
    $db = 'form';
    $username = 'root';
    $password = '';

    $conn = mysqli_connect($host, $username, $password, $db);

    $result = $conn->query("SELECT username, password FROM admin WHERE password = password");
    
    $row = $result->fetch_assoc();
    if($_POST["username"] == $row["username"] && $_POST["password"] == $row["password"]){
        $_SESSION["logged_in"] = true;
        header("Location: table.php");
        exit;
    }
    else{
        echo "Invalid Login Credentials";
    }

?>
