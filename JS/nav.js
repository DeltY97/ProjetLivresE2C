//récupération balise
let nav = document.querySelector('nav')
let trigger = document.querySelector('#trigger')
let close = document.querySelector('#close')

//fonction déplacement du nav
function openNav(){
    setTimeout(()=>{close.style.display='block'},1000);     //()=>{} call-back ou fonction implicite, sans-nom donc pas appelable ailleurs.
    nav.style.left = "0";
    trigger.style.left = "-25vh";}

function closeNav(){
    close.style.display='none';
    nav.style.left = "-25vw";
    trigger.style.left = "0";}


//event (déclenche mouvement)
trigger.addEventListener('click', openNav);
close.addEventListener('click', closeNav);
