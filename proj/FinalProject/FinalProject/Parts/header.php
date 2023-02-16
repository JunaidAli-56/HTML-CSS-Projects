<?php
echo '<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="style.css" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Project Point</title>
  </head>
  <body class="bg-dark">';
echo '<nav class="navbar navbar-expand-lg navbar-dark bg-dark border border-warning rounded">
<div class="container-fluid bg-dark">
  <a class="navbar-brand text-warning" href="#">Project Point</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active text-warning" aria-current="page" href="#">Home</a> 
      </li>

      <li class="nav-item">
        <a class="nav-link active text-warning" aria-current="page" href="#">Contact</a>
        <li class="nav-item">
        <a class="nav-link active text-warning" aria-current="page" href="#">About</a>
        <li class="nav-item">
        <a class="nav-link active text-warning" aria-current="page" href="#">Terms of use</a>
        
      </li>
    </ul>

    <form class="d-flex">
      <a href="http://localhost/finalproject/manage.php" class="btn btn-warning style">Manage Post</a>
      <a href="http://localhost/finalproject/form.php" class="btn btn-warning style mx-2">Add Post</a>
    </form>
  </div>
</div>
</nav>';
?>
