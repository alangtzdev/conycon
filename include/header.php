<?php
session_start();
if (!isset($_SESSION["username"])) {
    header('Location: login.php');
    // echo '<script>window.location ="login.php"</script>';
} 
if(isset($_SESSION['actividad'])){
  if ($_SESSION['actividad'] < time()) {
    session_destroy();
    $_SESSION = [];
    session_write_close();
    unset($_SESSION['actividad']);
    header('Location: login.php');
  } else{
    $_SESSION['actividad'] = time() + 900;
  }
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=no" />
    <meta name="author" content="El Colegio de San Luis - UTIC" />
    <meta name="theme-color" content="#ffffff" />
    <title>El Colegio de San Luis :: Apps</title>
    <!-- Loading Indicator -->
    <!-- <script src="assets/js/pace.min.js"></script> -->
    <!-- <link href="assets/css/pace.css" rel="stylesheet" /> -->

    <!-- <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.4/dist/semantic.min.css"> -->
    <link rel="stylesheet" type="text/css" href="./assets/css/fomantic.css">
    <link rel="stylesheet" href="./assets/plugins/waitme/waitMe.css">
    <!-- <link rel="stylesheet" type="text/css" href="assets/css/semantic.amazon.css"> -->
    <!-- <link rel="stylesheet" type="text/css" href="../css/custom.css"> -->
</head>

<body id="root">