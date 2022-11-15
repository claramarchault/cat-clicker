// FONCTIONS

function addMiaou(){
    score = score + scoreCalc
    document.querySelector('#score').innerHTML = 'Nombre de miaou : ' + score;
    // alert('score:'+score+',compteur:'+compteur+',prix:'+prixMultiplier)
}
function multiplierfunction(){

   // alert('BEFORE : score:'+score+',compteur:'+compteur+',prix:'+prixMultiplier)

    if (score < prixMultiplier) {
        alert("Tu n'as pas assez de miaou :/ \nCourage chouchou !");
        return;
    } 

    scoreCalc += 1

    score = score - prixMultiplier
    document.querySelector('#score').innerHTML = 'Nombre de miaou : ' + score;

    prixMultiplier = prixMultiplier * 2
    document.querySelector('#prix').innerHTML = prixMultiplier + ' MIAOU';

    compteur = compteur + 1
    document.querySelector('#compteur').innerHTML = 'X' + compteur;

    //alert('AFTER : score:'+score+',compteur:'+compteur+',prix:'+prixMultiplier)
}

function sourisEnBas() {
    document.querySelector("#chat").src="images/chatcc.png"
}

function sourisEnHaut() {
    document.querySelector("#chat").src="images/chatsimple.png"
}

function autoclick(){

    if (score < prixAuto) {
        alert("Tu n'as pas assez de miaou :/ \nCourage chouchou !");
        return;
    }

    setInterval(auto_clik, 1000)

    score = score - prixAuto
    document.querySelector('#score').innerHTML = 'Nombre de miaou : ' + score;

    prixAuto = prixAuto * 2
    document.querySelector('#prixAuto').innerHTML = prixAuto + ' MIAOU';

    compteurAuto = compteurAuto + 1
    document.querySelector('#compteurAuto').innerHTML = compteurAuto;
    
}

function auto_clik(){
    score ++
    // score = score + scoreCalc
    mettreAjourAffichage(score)
}

function mettreAjourAffichage(){
    document.querySelector('#score').innerHTML = 'Nombre de miaou : ' + score;
}

function onoff(element)
{
  buttonstate= 1 - buttonstate;
  var blabel, bstyle, bcolor;

  if(buttonstate)
  {
    blabel="ON"  ;
    // bstyle="green";
    bcolor="lightyellow";
    audioElement.volume = 0;
    audioElement1.volume = 0;
  }
  else
  {
    blabel="OFF";
    // bstyle="lightgray";
    bcolor="gray";
    audioElement.volume = 1;
    audioElement1.volume = 1;
  }

  var child=element.firstChild;
  child.style.background=bstyle;
  child.style.color=bcolor;
  child.innerHTML=blabel;
}

function audio(){
    audioElement.play()
}

function audio1(){
    audioElement1.play()
}

function pluiecroquette() {

    const NB_croquette = 30;

    // if (score >= 10){
    //     document.querySelector('#chat').addEventListener('click',pluiecroquette);
    //     return;
    // }

    for (let index = 0; index < NB_croquette; index++){
        const element = document.createElement('img')
        element.src = 'images/croquette.png'
        element.className= 'croquette'

        x = Math.round(Math.random() * 100)
        y = Math.round(Math.random() * 10)
        element.style.left = x + 'vw';
        element.style.top = y + 'vh';
        document.querySelector('body').appendChild(element)
    }

}

// **************************

window.onload = function alert() {

    let name = prompt("Nom du propriétaire ?");

    let space = document.getElementById("donneeperso");

    space.innerHTML = name + ", dit coucou au chat";

    space.classList = 'animated';

}

var score = 0 // score affiché
var multiplier = 1
var prixMultiplier = 5
var compteur = 2 // prochain (affiché)
var scoreCalc = 1 // permet d'augmenter le score affiché (sorte de ponderation)
var prixAuto = 500
var compteurAuto = 1
var buttonstate = 0;

document.querySelector("#chat").addEventListener("mousedown", sourisEnBas)

document.querySelector("#chat").addEventListener("mouseup", sourisEnHaut)

document.querySelector('#chat').addEventListener('click', () => { addMiaou(), audio()})

// multiplicateur

document.querySelector("#multiplier").addEventListener("click", () => {multiplierfunction(); audio1()})

// autoclicker 

document.querySelector("#autoclick").addEventListener("click", () => {autoclick(), audio1(), pluiecroquette()})

// audio

const audioElement = new Audio('miaou.mp3');

const audioElement1 = new Audio('chatenerve1.mp3');

//textes aléatoire

const textes = [
    "Miaou miaou, j'ai faim", 
    "Plus vite, il me faut des croquettes", 
    "Je te confie un secret : je préfère la pâté aux croquettes...",
    "J'aime dormir sur le canapé",
    "Mes copains chats me manquent, joue avec moi",
    "Miaou ! Miaou !"
]

function textealeatoire(){
    Aleatoire = Math.trunc(Math.random()*textes.lenght);
    texteAleatoire = textes[Aleatoire];
    return texteAleatoire
}

setInterval( () => {
    document.querySelector('#text').innerHTML = textealeatoire()
}, 10000);
