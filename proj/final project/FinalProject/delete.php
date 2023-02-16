<?php
include 'parts/db_connect.php';
$id = $_GET['id'];
$sql = "DELETE FROM `posts` WHERE `posts`.`sno` = $id";
$result = mysqli_query($conn,$sql);
header('location: http://localhost/finalproject/index.php');
?>