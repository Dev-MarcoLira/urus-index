<?php

    if(isset($_POST['name']))
        echo 'Hello '.$_POST['name'];

    $con = new PDO("mysql:host=localhost;dbname=tcc2023", "root", "");
    echo 'conectado com sucesso';

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login or Register yourself</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    
    <a href="main"><div class="logo"></div></a>

    <h2>Login</h2>

    <form name="f1" method="post" action="#">

        <label for="name">Nome</label>
        <input type="text" name="name" placeholder="required*">

        <label for="username">Nome de Usuário</label>
        <input type="text" name="username" placeholder="required*">

        <label for="cpf">CPF</label>
        <input onkeyup="styliseCpfField()" type="text" name="cpf" placeholder="required*">

        <label for="email">E-mail</label>
        <input type="email" name="email" placeholder="required*">

        <div class="useless">
            <label for="password">Senha</label>
            <input type="password" name="password" placeholder="required*">
        </div>

        <input type="submit" name="register" value="Send it">


    </form>

    <script src="script.js"></script>

</body>
</html>