<?php
include 'parts/header.php';
include 'parts/db_connect.php';
?>


<?php
    
    if(isset($_POST['submit']) && $_SERVER['REQUEST_METHOD'] == 'POST'){
        $title = $_POST['title'];
        $desc = $_POST['desc'];
        $img = $_FILES['image']['name'];
        

        $tmp_name = $_FILES['image']['tmp_name'];
        $folder = "imgs/" . $img;
        move_uploaded_file($tmp_name, "imgs/" . $img);
        $sql = "INSERT INTO `posts` (`title`, `description`, `img`, `timestapm`) VALUES ('$title', '$desc', '$folder', current_timestamp())";

        
        $result = mysqli_query($conn, $sql);
    }

?>



<div class="container">
    <div class="mb-3">
        <form action="http://localhost/finalproject/form.php" method="POST">
            <label for="title" class="form-label">Enter Title</label>
            <input type="text" name="title" class="form-control" id="title" placeholder="Title here">
    </div>
    <div class="mb-3">
        <label for="desc" class="form-label">Descripition</label>
        <textarea class="form-control" id="desc" name="desc" rows="3"></textarea>
    </div>
    <div class="mb-3">
            <input type="file" name="img">
    </div>
    <div class="mb-3">
        
        <button name="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
</div>





<?php
include 'parts/footer.php';

?>