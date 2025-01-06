<nav>
    <?php
        foreach($navButtons as $button) {
            ?>
                <a href=<?= $button["path"] ?> class="bouton"><?= $button["label"] ?></a>
            <?php
        }
    ?>

    <!--
        <a href="../controller/homeController.php" class="bouton">Accueil</a>
        <a href="../controller/libraryController.php" class="bouton">Bibliothèque</a>
        <a href="../controller/gamesController.php" class="bouton">Espace détente</a>
        <a href="../controller/aboutUsController.php" class="bouton">Qui sommes-nous</a>
    -->
</nav>