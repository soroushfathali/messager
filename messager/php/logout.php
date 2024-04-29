<?php
    // session_start();
    // if (isset($_SEESION['unique_id'])) {
    //     include_once "config.php";
    //     $logout_id = mysqli_real_escape_string($conn, $_GET['logout_id']);
    //     if (isset($logout_id)) {
    //         $status = "Offline now";
    //         $sql = mysqli_query($conn, "UPDATE users SET status = '{$status}' WHERE unique_id = {$logout_id}");
    //         if ($sql) {
    //             session_unset();
    //             session_destroy();
    //             header("location:../login.php");
    //         }
    //     }else {
    //          header("location:../users.php");
    //     }
    // }else {
    //     header("location:../login.php");
    // }


    // session_start();
    // if (isset($_SEESION['unique_id'])) {
    //     include_once "config.php";
    //     $logout_id = mysqli_real_escape_string($conn, $_GET['logout_id']);
        // if (isset($logout_id)) {
        //     $status = "Offline now";
        //     $sql = mysqli_quey($conn, "UPDATE users SET status = $status WHERE unique_id = {$logout_id}");
        //     if ($sql) {
        //         session_unset();
        //         session_destroy();
        //         header("location:../login.php");
        //     }
        // }else{
    //         // header("location:../users.php");
    //         echo "ridi";
    //     }
    // }else {
    //     header("location:../login.php");
    // }

    // session_start();
    // if(isset($_SEESION['unique_id'])){
    //     include_once "config.php";
    //     session_unset();
    //     session_destroy();
    //     header("location: ../login.php");
    // }else{
    //     echo "RRRIIIIIDI";
    // }

    session_start();
    if(isset($_SESSION['unique_id'])){
        include_once "config.php";
        $logout_id = mysqli_real_escape_string($conn, $_GET['logout_id']);
        if(isset($logout_id)){
            $status = "Offline now";
            $sql = mysqli_query($conn, "UPDATE users SET status = '$status' WHERE unique_id = {$logout_id}");
            if($sql){
                session_unset();
                session_destroy();
                header("location: ../login.php");
            }else{
                hearder("location: ../users.php");
            }
        }
    }
    else{
        header("location: ../login.php");
    }
?>