<?php

    $fileName = isset($_GET['url']) ? $_GET['url'] : 'main';

    
    if(file_exists("$fileName.php")){
        include("$fileName.php");
    }else{
        echo "<h2>Error 404! File doesn't exist!!!</h2>";
    }


?>