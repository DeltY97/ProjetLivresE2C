<?php
session_start();


if(!isset($_SESSION["id"])) {
    header("location: ../controller/homeController.php");
}


$title = "Mon compte";
$subtitle = "Compte et informations";
$navButtons = [
    [
        "label" => "Accueil",
        "path" => "../controller/homeController.php"
    ],
    [
        "label" => "Bibliothèque",
        "path" => "../controller/libraryController.php"
    ],
    [
        "label" => "Espace détente",
        "path" => "../controller/gamesController.php"
    ],
    [
        "label" => "Qui sommes-nous?",
        "path" => "../controller/aboutUsController.php"
    ]
];

require_once("../view/accountView.php");