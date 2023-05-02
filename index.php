<?php

    include('config.php');

    $fileName = isset($_GET['url']) ? $_GET['url'] : 'main';
    
    if(file_exists(PATH_PAGES."$fileName.php")){
        include(PATH_PAGES."$fileName.php");
    }else{
        echo "<h2>Error 404! File doesn't exist!!!</h2>";
        echo '<a href='.FULL_PATH.'>Urus Store</a>';
    }


?>