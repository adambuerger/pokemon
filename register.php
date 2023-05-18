
<?php
    session_start();
    if($_SESSION['logged_in'] != true){
        echo "Error: please login.";
        exit();
    }
    $host = 'localhost';
    $db = 'form';
    $username = 'root';
    $password = '';

    $conn = mysqli_connect($host, $username, $password, $db);

    if(mysqli_connect_error()){
        exit('Error connecting to database $db' . mysqli_connect_error());
    }
    if(!isset($_POST['username'], $_POST['password'], $_POST['email'])){
        exit('Empty Field(s)');
    }
    if(empty($_POST['username'] || empty($_POST['password']) || empty($_POST['email']))){
        exit('Value Empty');
    }
    if($stmt = $conn->prepare('SELECT id, password FROM users WHERE username = ?')){
        $stmt->bind_param('s', $_POST['username']);
        $stmt->execute();
        $stmt->store_result();
        
        if($stmt = $conn->prepare('INSERT INTO users (username, password, email) VALUES (?, ?, ?)')){
            $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
            $stmt->bind_param('sss', $_POST['username'], $password, $_POST['email']);
            $stmt->execute();
            header("Location: table.php");
            exit;
        }
        else{
            echo 'Error Occurred';
        }
        $stmt->close();
        }
    $conn->close();
?>