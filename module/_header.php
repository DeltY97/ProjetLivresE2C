<header>
        <img src="../asset/logo.png" alt="logo E2C-silence on lit" id="logo">
        <div id="titre">
        <h1><?=$title ?></h1>
        <h2><?=$subtitle ?></h2>
        </div>
        <div id="logForm">
            <?php
                if(isset($_POST["username"])){
                    $username = $_POST["username"]
            ?>
                <p><?= "Bonjour $username" ?></p>
            <?php
                } else{
            ?>
            <form method="post" action="../controller/loginController.php" id="loginForm">
                <div class="formLine">
                    <label for="email">Adresse Mail</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="formLine">
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password" id="password" required>
                </div>
                <div class="formLine">
                    <input type="submit" value="Me connecter à mon compte" class="loginBouton">
                </div>
                
            </form> 
            <?php }
            ?>
            
        </div>
    </header>