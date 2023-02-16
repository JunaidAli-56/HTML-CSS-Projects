<?php
    $server_name = 'localhost';
    $user_name = 'root';
    $pass = '';
    $database = 'finalproject';

    $conn = mysqli_connect($server_name, $user_name, $pass, $database);
    if(!$conn){
        echo 'Error';
    }
    

?>