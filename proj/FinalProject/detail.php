<?php
    include 'parts/header.php';
    include 'parts/db_connect.php';
?>

<?php
    $id = $_GET['id'];
    $sql = "select * from `posts` where sno=$id";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $title = $row['title'];
    $desc = $row['description'];

    echo '<div class="alert container my-3 alert-success" role="alert">
    <h4 class="alert-heading">'.$title.'</h4>
    <p>'.$desc.'</p>
  </div>';
?>






<?php
    include 'parts/footer.php';

?>