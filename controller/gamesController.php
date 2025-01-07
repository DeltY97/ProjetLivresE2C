<?php
    $isLogged = true;
    $title = "Espace détente";
    $subtitle = "GameZone";
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

    if($isLogged) {
        $navButtons[]= [
            "label" => "Mon compte",
            "path" => "../controller/accountController.php"];
    }

    require_once("../view/gamesView.php");