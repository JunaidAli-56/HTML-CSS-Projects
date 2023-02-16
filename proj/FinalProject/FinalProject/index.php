<?php
include 'parts/header.php';
include 'parts/db_connect.php';
?>


<h3 class="text-center my-3 text-warning">POSTS</h3>
<div class="container" style="height: 100vh; display: flex; justify-content: center; align-items: center; flex-wrap: wrap; ">
    <?php
    $sql = "select * from `posts`";
    $fetch_result = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_assoc($fetch_result)) {
        $id = $row['sno'];
        $title = $row['title'];
        $desc = $row['description'];
        $imgsrc = $row['img'];
        echo '
        <div class="card mx-2 border border-warning" style="width: 18rem; ">
        <img src="'.$imgsrc.'" class="card-img-top" alt="...">
        <div class="card-body bg-dark text-warning border border-warning">
        <h5 class="card-title">'.$title.'</h5>
        <p class="card-text">'.substr($desc,0,100).'...</p>
        <a href="http://localhost/finalproject/detail.php?id='.$id.'" class="btn btn-warning">Read More</a>
        </div>
        </div>';
    }
    ?>
</div>








<?php
include 'parts/footer.php';
?>