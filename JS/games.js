import { Morpion } from "./morpion.js";

let menu = document.querySelector('#menuZone');
let gameZone = document.querySelector('#gameZone');
/*mise en place lien avec html*/

function initialize(){
    gameZone.innerHTML = "#gameZone";
}

function newGame(){
    initialize();

    switch(menu.value){
        case "1":
            let game = new Morpion(gameZone);

            break;
                default:
            break;
    }
}

menu.addEventListener('change', newGame);