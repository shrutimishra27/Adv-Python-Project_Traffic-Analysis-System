<?php
    session_start();
    if (isset($_SESSION["user"])){
        header("Location: ../index1.html");
    }
    if (isset($_POST["login"])) {
        $email = $_POST["email"];
        $password = $_POST["password"];
        require_once "database.php";
        $sql = "SELECT * FROM login_users WHERE email = '$email'";
        $result = mysqli_query($conn, $sql);
        $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($user){
            if (password_verify($password, $user["password"])){
                session_start();
                $_SESSION["user"] = "yes";
                header("Location: ../index1.html");
                die();
            }
            else{
                echo "<div class='alert alert-danger'>Password does not match</div>";   
            }
        }
        else{
            echo "<div class='alert alert-danger'>Email does not exists!</div>";
        }
    }          
?>