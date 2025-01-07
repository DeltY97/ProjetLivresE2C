<?php
    //$username = (isset($_POST["username"]))?$_POST["username"]:"inconnu";     mettre inconnu si username pas défini (si pas passé par chemain de log par exemple)
    
    $isLogged = true;
    $title = "Bibliothèque";
    $subtitle = "bonne lecture !";
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

    require_once("../view/libraryView.php");