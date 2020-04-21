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
            echo "
            <body style='background-image: url(../img/Header/bg.png); max-width: 1020px; margin: auto; color: white; background-size: cover;'>
                <div style='font-size: 33px; margin: auto; font-weight:bold; text-align: center; position: absolute; top: 43%; left: 21%;'>
                    Такой пользователь не найден.
                    <br /> 
                    Возможно, вы ввели неверный логин или пароль
                </div>
            </body>
                ";
            header("Refresh:2; url=http://localhost/leo/");
            exit();
        }
    
    setcookie('user', $user['login'], time() + 3600, "/");
$mysql->close ();

    header('location: http://localhost/leo/');
?>
