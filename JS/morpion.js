export class Morpion {

    morpionZone;
    infoZone;
    gridZone
    /*Elements du HTML*/

    squareNumber = 9;
    squares = []
    /*Variables du jeu*/

    /*<param> {HTMLElement} zoneHTML;       Fonction pour créer la zone HTML (pas recommandé car de - en - support par navigateurs?)*/

    constructor(zoneHTML){ /*lien entre JS, HTML et CSS (pour interactions?)*/
        this.morpionZone = zoneHTML;
            this.morpionZone.setAttribute('class', 'morpion-Zone');
        
        this.infoZone = document.createElement('div');
            this.infoZone.setAttribute('class', 'info-Zone')
        
        this.gridZone = document.createElement('div')
            this.gridZone.setAttribute('class', 'grid-Zone');

        this.morpionZone.appendChild(this.infoZone); /*appendChild pour Node -> en bref paquets de dépendances (+/-dossiers dans dossiers)*/
        this.morpionZone.appendChild(this.gridZone);

        for(let i = 0; i<this.squareNumber; i++){
                let square = document.createElement('div');
                square.setAttribute('clas', 'square');
                this.gridZone.appendChild(square);
                this.squares.push(square);}
            
        for(let i = 0; i<this.squares.length; i++){
                this.squares[i].addEventListener('click', this.squareClick.bind(this, i));}
    }

    squareClick(i){ /*image quand click sur case (/!\ 1 seule image ? -> sûrement fonction pour 2 images pas encore faite)*/
        console.log('click')
        this.squares[i].style.backgroundImage = 'url(../asset/croixTest.png)';
    }

}