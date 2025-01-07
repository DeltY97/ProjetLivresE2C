<?php
    $isLogged = true;
    $title = "Silence on lit ! - E2C";
    $subtitle = "Explorez votre imaginaire";
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

    if($isLogged) {
        $navButtons[]= [
            "label" => "Mon compte",
            "path" => "../controller/accountController.php"];
    }

    //var_dump($navButtons);    équivalent à console.log (voir intérieur variable)

    require_once("../view/homeView.php");