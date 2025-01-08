<?php
session_start(); //à chaque début de controller pour pouvoir utiliser une session
$message = "";
require_once('../model/Model.php');
//var_dump($_POST);

$email = htmlspecialchars($_POST["email"]);  //htmlspecialchars = éviter hack de base en passant l'entrée en texte

$password = htmlspecialchars($_POST["password"]);

// || = ou
if($email == null || $password == null){          
    $message = "Informations manquantes";
    //header("location: ../controller/homeController.php");
}else{
    $bdd = new Model();

    $user = $bdd->getUserByEmail($email); //getUserByEmail = fonction créée dans Model

    if(!$user){
        $message = "Ce compte n'existe pas";
    }else if($password != $user["password"]){
        $message = "Mot de passe incorrect";
    }else{
        //connexion OK
        $_SESSION["id"] = $user["id"];
        $_SESSION["pseudo"] = $user["pseudo"];
    }
}

if($message != ""){
    header("location: ../controller/homeController.php?message=$message"); //? dans url = variable get
}

//var_dump($user);