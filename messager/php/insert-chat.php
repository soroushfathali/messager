<?php

    session_start();
    if (isset($_SESSION["unique_id"])) {
        include_once "config.php";
        $outgoing_id = mysqli_real_escape_string($conn, $_POST['outgoing_id']);
        $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']);
        $message = mysqli_real_escape_string($conn, $_POST['message']);

        // if (!empty($message)) {
        //     $sql = mysqli_real_escape_string($conn, "INSERT INTO messages (incoming_msg_id, outgoing_msg_id, msg) VALUES ($incoming_id, $outgoing_id, '{$message}')");
        // }
        if (!empty($message)) {
            $sql = mysqli_query($conn, "INSERT INTO messages (incoming_msg_id, outgoing_msg_id, msg) VALUES({$incoming_id}, {$outgoing_id}, '{$message}')");
        }
    } else {
        header("location: ../login.php");
    }

    
        //     $sql = "INSERT INTO messages (incoming_msg_id, outgoing_msg_id, msg) VALUES ($incoming_id, $outgoing_id, {$message})";
        //     if (mysqli_query($conn, $sql)){
        //         echo "Insert was succesull";
        //     // header ("location: ../chat.php");
        //     }
        // }else{
        //     echo "Insesrt was not succesfull";
        // }

    // include_once "config.php";
    // $sql="INSERT INTO messages (incoming_msg_id, outgoing_msg_id, msg) VALUES ('$incoming_id', '$outgoing_id', '$message')";

    // if (mysqli_query($conn, $sql)) {
    //     echo '<script>alert("succesful")</script>';
    //     echo "Inserted succesfully";
    // // header ("location: ../chat.php");

    // }
    

    
?>