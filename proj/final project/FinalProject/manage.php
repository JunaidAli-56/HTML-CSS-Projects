<?php
include 'parts/header.php';
include 'parts/db_connect.php';
?>



<div class="container my-3" style="height: 100vh; display: flex; justify-content: center;">
   
    <div class="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  <?php
    $sql = "select * from `posts`";
    $result = mysqli_query($conn, $sql);
    $sno = 1;
   while( $row = mysqli_fetch_assoc($result)){
    $id = $row['sno'];
    $title = $row['title'];
    $desc = $row['description'];
       echo ' <tr>
       <th scope="row">'.$sno.'</th>
       <td>'.$title.'</td>
       <td>'.$desc.'</td>
       <td>
       <a class="btn btn-success" name="edit" href="http://localhost/finalproject/edit.php?id='.$id.'">Edit</a>
       </td>
       <td>
       <a class="btn btn-success" href="http://localhost/finalproject/delete.php?id='.$id.'">Delete</a>
       </td>
     </tr>';
     $sno+=1;
   }
       

    ?>
   
  </tbody>
</table>
    </div>
</div>








<?php
include 'parts/footer.php';
?>