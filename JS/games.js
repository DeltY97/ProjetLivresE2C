import { Morpion } from "./morpion.js";

let menu = document.querySelector('#menu');
let gameZone = document.querySelector('#gameZone');

//console.log(menu, gameZone);

function initialize(){
    gameZone.innerHTML = "";
    console.log('INITIALE');
}

function newGame(){
    initialize();
    console.log("activation menu");

    switch(menu.value){
        case "1":
            let game = new Morpion(gameZone);

            break;
                default:
            break;
    }
}

menu.addEventListener('change', newGame);