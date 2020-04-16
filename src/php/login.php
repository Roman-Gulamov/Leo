<?php

$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);
    
$mysql = new mysqli ('localhost', 'root', '', 'leo');
    $mysql->query("SET NAMES 'utf8'");
    $result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");
    
    $user = $result->fetch_assoc();
        if (count($user) == 0) {
            echo "Такой пользователь не найден <br /> Возможно, вы ввели неверный логин или пароль";
            exit();
        }
    
    setcookie('user', $user['login'], time() + 3600, "/");

$mysql->close ();

    header('location: http://localhost/leo/');
?>
