//console.log("Hello World!");

//let UserName = "DeltY";     //string (chaîne de caractères)
//let Age = 20;               //int (nombre entier)
//let Size = 1.77;            //float (nombre à virgule)
//let IsCool = false;         //bool (variable en true/false)
//console.log(Size-0.02)
//console.log(a+b, a/b, a-b, a*b, a%b)
//let nombre2 = parseInt(prompt("Donner le second nombre"));    prompts pas intéressant car fige page et force user à taper un truc

let resultsHTML = document.querySelector('#results'); //intégraion au HTML au début du code.js par convention
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let calculate = document.querySelector('#calculate');

console.log(number1, number2, calculate, results)

/*let nombre1 = parseInt(prompt("Donnez un premier nombre")); //parseInt() pour changer "l'identité" du prompt en nombre

    nombre1 = parseInt(prompt("Tu le fais exprès ? il faut un NOMBRE"))}

    
let nombre2 = parseInt(prompt("Donner le second nombre"));  //parse...() pour changer "l'identité" du prompt
while(isNaN(nombre2)){
    nombre2 = parseInt(prompt("Il faut un nombre"))}
*/

function makeCalcul(){
        
    let nombre1 = parseInt(number1.value);
    while(isNaN(nombre1)){
        nombre1 = parseInt(prompt("Nombre 1: Il faut un nombre"))}

    let nombre2 = parseInt(number2.value);
    while(isNaN(nombre2)){
        nombre2 = parseInt(prompt("Nombre 2: Il faut un nombre"))}

    let resultat = nombre1 + nombre2;
    let MessageAdd = "<p>Le résultat de l'addition de "+nombre1+" et de "+nombre2+" est "+resultat +"</p>"; //vieille méthode de concaténationresultsHTML.innerHTML = MessageAdd;
    resultsHTML.innerHTML = MessageAdd

    resultat = nombre1 - nombre2;
    let MessageMoins = `<p>Le résultat de la soustraction de ${nombre1} et de ${nombre2} est ${resultat}</p>`; //meilleure méthode de concaténation (moins d'erreurs en général)
    resultsHTML.innerHTML += MessageMoins;

    resultat = nombre1 * nombre2;
    let MessageMult = `<p>Le résultat de la multiplication de ${nombre1} et de ${nombre2} est ${resultat}</p>`;
    resultsHTML.innerHTML += MessageMult

    resultat = nombre1 / nombre2;
    let MessageDiv = `<p>Le résultat de la division de ${nombre1} et de ${nombre2} est ${resultat}</p>`;
    resultsHTML.innerHTML += MessageDiv
}

calculate.addEventListener("click", makeCalcul)

/*for(let i = 1; i<=10; i++){
    console.log(`${i} - Bonsoir`)}*/
