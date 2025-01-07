<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Silence on lit</title>
    <link rel="stylesheet" href="../style/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <script type="module" src="../JS/games.js"></script>
    <script type="module" src="../JS/nav.js"></script>
</head>
<body>
    <?php
        require_once("../module/_header.php");
        require_once("../module/_nav.php");
    ?>
    
    <main>

        <div id="menuZone"></div>
            <label for="menu">Choix du jeu</label>
            <select name="menuJeux" id="menu">
                <option value="0" selected="true">Faites un choix</option>
                <option value="1">Morpion</option>
            </select>
        <div id="gameZone"></div>

    </main>

    <div id="trigger"></div>
</body>
</html> 