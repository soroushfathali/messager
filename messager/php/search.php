<?php
    session_start();
    include_once "config.php";
    $outgoing_id = $_SESSION['unique_id'];
    $searchTerm = mysqli_real_escape_string($conn, $_POST['searchTerm']);
    // echo $searchTerm;
    $output = "";
    $sql = mysqli_query($conn, "SELECT * FROM users WHERE NOT unique_id = {$outgoing_id} AND (fname LIKE '%{$searchTerm}%' OR lname LIKE '%{$searchTerm}%')");
    if (mysqli_num_rows($sql) > 0) {
        // $output .= "user found";
        include "data.php";
    }else {
        $output .= "No user found related to your search";
    }
    echo $output;
?>
<?php
// include_once "config.php";
// $searchTerm = mysqli_real_escape_string($conn, $_POST['searchTerm']);
// $output = "";
// $sql1 = mysqli_query($conn, "SELECT `fname`, `lname` FROM users WHERE fname LIKE '%{$searchTerm}%' OR lname LIKE '%{$searchTerm}%';");
// // echo $sql;
// if (mysqli_num_rows($sql1) > 0) {
//     # code....
//     echo "hello";
// } else {
//     $output .= "NO user was found";
// }
// echo $output;
?>