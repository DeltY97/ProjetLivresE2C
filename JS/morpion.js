export class Morpion {

    morpionZone;
    infoZone;
    gridZone;   
    /*Elements du HTML*/

    squareNumber = 9;
    squares = [];
    isActive = [];
    score = [];
    playerOne;
    infoText;
    activePlayerIcon;
    victoryText;
    /*Variables du jeu*/

    /*<param> {HTMLElement} zoneHTML;       Fonction pour créer la zone HTML (pas recommandé car de - en - support par navigateurs?)*/

    constructor(zoneHTML){ /*lien entre JS, HTML et CSS (pour interactions?)*/
        console.log("lancement du morpion");
        this.playerOne 
        this.victoryText = 'Jeu en cours'
        this.morpionZone = zoneHTML;
            this.morpionZone.setAttribute('class', 'morpion-Zone');
        
        this.infoZone = document.createElement('div');
            this.infoZone.setAttribute('class', 'info-Zone');
            this.infoText = document.createElement('h2');
            this.infoText.innerHTML = "Joueur actif";
            this.infoZone.appendChild(this.infoText);
            this.activePlayerIcon = document.createElement('div');
            this.activePlayerIcon.setAttribute('id', 'playerIcon');
            this.infoZone.appendChild(this.infoText);
            this.infoZone.appendChild(this.activePlayerIcon);
            this.activePlayerIcon.style.backgroundImage = 'url(../asset/croixTest.png)';

        
        this.gridZone = document.createElement('div')
            this.gridZone.setAttribute('class', 'grid-Zone');

        this.morpionZone.appendChild(this.infoZone); /*appendChild pour Node -> en bref paquets de dépendances (+/-dossiers dans dossiers)*/
        this.morpionZone.appendChild(this.gridZone);

        for(let i = 0; i<this.squareNumber; i++){
                let square = document.createElement('div');
                square.setAttribute('class', 'square');
                this.gridZone.appendChild(square);
                this.squares.push(square);
                    this.isActive.push(true);
                    this.score.push(0);
                    /*console.log(this.isActive);*/
            }
            //console.log(this.score)
        for(let i = 0; i<this.squares.length; i++){
                this.squares[i].addEventListener('click', this.squareClick.bind(this, i));}
    }

    squareClick(i){
        if(this.isActive[i]){

        if(this.playerOne){
            this.score[i] = 1;
            this.squares[i].style.backgroundImage = 'url(../asset/croixTest.png)';
            this.activePlayerIcon.style.backgroundImage = 'url(../asset/rec.png)';
        }
        else{
            this.score[i] = 4;
            this.squares[i].style.backgroundImage = 'url(../asset/rec.png)';
            this.activePlayerIcon.style.backgroundImage = 'url(../asset/croixTest.png)';
        }
        //console.log(this.score);
        let gameState = this.checkVictory();
        if(gameState) {
            this.gameOver();} 
        else {
        this.playerOne = !this.playerOne;
        this.isActive[i] = false;
        }
    }}

    checkVictory(){
        let lineValues = [];
        let victory = false;

        lineValues.push(this.score[0]+this.score[1]+this.score[2]);
        lineValues.push(this.score[3]+this.score[4]+this.score[5]);
        lineValues.push(this.score[6]+this.score[7]+this.score[8]);
        lineValues.push(this.score[0]+this.score[3]+this.score[6]);
        lineValues.push(this.score[1]+this.score[4]+this.score[7]);
        lineValues.push(this.score[2]+this.score[5]+this.score[8]);
        lineValues.push(this.score[0]+this.score[4]+this.score[8]);
        lineValues.push(this.score[2]+this.score[4]+this.score[6]);

        if(lineValues.includes(3)){
            victory = true;
            this.victoryText = 'Victoire du Joueur 1';
        } else if (lineValues.includes(12)){
            victory = true;
            this.victoryText = 'Victoire du Joueur 2';
        } else if (!this.isActive.includes(true)) {
            victory = true;
            this.victoryText = 'Match Nul';
        }

        //console.log(lineValues);
        return victory;
    }

    gameOver(){
        for(let i = 0; i<this.isActive.length; i++) {
            this.isActive[i] = false;
        }
        this.infoText.innerHTML = 'Game Over';

        let finalText = document.createElement('p');
        finalText.innerHTML = this.victoryText;
        this.infoZone.appendChild(finalText);
    }

}