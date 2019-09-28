<?php
$emailid = $_POST['email'];
    $link = mysqli_connect('localhost','root','','validation');
    $sql = "Select * from users where email= '$emailid'";
    $result=mysqli_query($link,$sql);
    if(mysqli_fetch_assoc($result) == 0){
//        $sql = "Insert into users(email)values('$emailid')";
//        $result=mysqli_query($link,$sql);
//        if ($result){
//            echo 'save';
//        }
//        else{
//            echo 'not save';
//        }
        echo '';
    }

    else{
        echo 'Email allready taken';
    }

if(isset($_POST['btn'])){
   extract($_POST);
        $link = mysqli_connect('localhost','root','','validation');
        $sql = "Insert into users(fname,lname,email,password,cpassword,gender,district)values('$fname','$lname','$email','$password','$cpassword','$gender','$district')";
        $result=mysqli_query($link,$sql);
        if ($result){
            echo 'Data save !';
        }
        else{
            echo 'Data not save !';
        }
}

?>
