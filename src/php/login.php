<?php

$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);
    
$mysql = new mysqli ('localhost', 'root', '', 'leo');

if ($mysql->connect_errno) {
    printf("Соединение не удалось: %s\n", $mysql->connect_error);
    exit();
}

    $mysql->query("SET NAMES 'utf8'");
    $result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");
    
    $user = $result->fetch_assoc();
        if (count((array)$user) == 0) {
            echo  "
            <body style='background-image: url(../img/Header/bg.png); max-width: 1020px; margin: auto; color: white; background-size: cover;'>
                <img src='../../src/img/PHP/bad.png' style='width: auto; height: 300px; display: block; margin: auto; margin-top: 60px;' alt='BAD'>
                <div style='font-size: 57px; margin: auto; font-weight:bold; text-align: center;'>
                    Такой пользователь не найден.
                    <br /> 
                    Возможно, вы ввели неверный логин или пароль
                </div>
                <img src='../../src/img/PHP/bad.png' style='width: auto; height: 300px; display: block; margin: auto;' alt='BAD'>
            </body>
                ";
            header("Refresh: 2; url=http://192.168.0.101/leo/");
            exit();
        } else {
            setcookie('user', $user['login'], time() + 3600, "/");
        }
$mysql->close ();

    header('location: http://localhost/leo/');
?>
