<?php

include 'parts/db_connect.php';
include 'parts/header.php';
?>
<?php
if(isset($_POST['update']) && $_SERVER['REQUEST_METHOD'] == 'POST'){
$editTitle = $_POST['editTitle'];
 $editDesc = $_POST['editdesc'];
 $uid = $_GET['id'];
$updatesql = "UPDATE `posts` SET `title` = '$editTitle', `description` = '$editDesc' WHERE `posts`.`sno` = $uid";
$updateResult = mysqli_query($conn,$updatesql);

header('location: http://localhost/finalproject/index.php');

}
?>

<?php
$id = $_GET['id'];
$sql = "select * from `posts` where sno=$id";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$title = $row['title'];
$desc = $row['description'];
?>
<div class="container">
    <div class="mb-3">
      <?php  echo' <form action="http://localhost/finalproject/edit.php?id='.$id.'" method="post">'?>
            <label for="edittitle" class="form-label">Title</label>
            <input type="text" class="form-control" id="edittitle" placeholder="Titlle" name="editTitle" value="<?php echo $title ?>">
    </div>
    <div class="mb-3">
        <label for="editdesc" class="form-label">Description</label>
        <textarea class="form-control" id="editdesc" rows="3" name="editdesc"><?php echo $desc?></textarea>
    </div>
            <button class="btn btn-primary my-3" name="update" role="button">Save changes</button>

    </form>
</div>

<?php

include 'parts/footer.php';


?>