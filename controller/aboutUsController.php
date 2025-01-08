<?php
session_start();
    $isLogged = true;
    $title = "Qui sommes-nous ?";
    $subtitle = "Q&A";
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
        ],
    ];

    if($_SESSION["id"]) {
        $navButtons[]= [
            "label" => "Mon compte",
            "path" => "../controller/accountController.php"];
    }
    require_once("../view/aboutUsView.php");