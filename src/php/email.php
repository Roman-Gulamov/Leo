<?php

$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_STRING);

    $mysql = new mysqli ('localhost', 'root', '', 'leo');
    $mysql->query("SET NAMES 'utf8'");
    $mysql->query("INSERT INTO `emails` (`email`)
    VALUES('$email')");

    $mysql->close ();

    header('location: http://localhost/leo/');
?>