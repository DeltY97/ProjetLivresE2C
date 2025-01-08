<?php

//si nom avec une majuscule => c'est un objet pas une fonction. un objet peut stocker des fonctions et des variables
//PDO = vaariable de base de donnée
//private = variable et public = fonction
class Model {
    Private PDO $bdd;

    public function __construct()
    {

        try{
        $this->bdd = new PDO('mysql:host=127.0.0.1:3306;dbname=Livres_E2C;charset=utf8','phpmyadmin','PNE2Cgrandlille'); //(mysql:IP du localhost;nom de la base de données;charset,'nom utilisateur','mot de passe');

    } catch(Exception $e){ 
        echo('problème de connection : '.$e->getMessage());
    }

    //var_dump($this->bdd);
    }


    //toujours même fonction à qq mots près
    public function getUserByEmail(string $email){
        $sqlQuery = "SELECT id, pseudo, password FROM Users WHERE email = :email"; //pas de $email après email = car hackable 
        $statement = $this->bdd->prepare($sqlQuery);
        $statement->execute([
            'email' => $email
        ]);
        $req = $statement->fetch(); //fetch ou fetchAll() => 1 résultat voulu ou tout les résultats ?

        return $req;
    }
}