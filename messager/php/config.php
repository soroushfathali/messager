<?php
    $conn = mysqli_connect("localhost","root","","chat");
    if (!$conn) {
        echo "Connected succesfuly" . mysqli_connect_error();
    }
    // else{
    //     echo "Error";
    // }
    // echo "hello";
?>