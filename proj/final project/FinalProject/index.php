<?php
include 'parts/header.php';
include 'parts/db_connect.php';
?>



<div class="container" style="height: 100vh; display: flex; justify-content: center; align-items: center; flex-wrap: wrap; ">
    <?php
    $sql = "select * from `posts`";
    $result = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_assoc($result)) {
        $id = $row['sno'];
        $title = $row['title'];
        $desc = $row['description'];
        echo '<div class="card mx-2" style="width: 18rem; ">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">'.$title.'</h5>
        <p class="card-text">'.substr($desc,0,100).'...</p>
        <a href="http://localhost/finalproject/detail.php?id='.$id.'" class="btn btn-primary">Read More</a>
        </div>
        </div>';
    }
    ?>
</div>








<?php
include 'parts/footer.php';
?>