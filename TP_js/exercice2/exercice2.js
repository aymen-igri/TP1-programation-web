let score = 0;
const randnbr = Math.floor(Math.random() * 10)+1;


function the_game(){
    const nbr = document.getElementById("nombre");

    const resultat = document.getElementById("resultat");
    const num = parseFloat(nbr.value) ;
    
    let win = num == randnbr;
    const scoreres = document.getElementById("score");
    
    score++;
    scoreres.innerHTML = `<h1>Score: ${score}</h1>`;
    if(win){
        resultat.innerHTML = `<div class="win">Bravo! Vous avez gagné 👏🥳</div>`;
    }
    else if(num < randnbr){
        resultat.innerHTML = `<div class="smal">Le nombre est trop petit</div>`;
    }
    else if(num > randnbr){
        resultat.innerHTML = `<div class="big">Le nombre est trop grand</div>`;
    }
    
}

document.getElementById("submit").addEventListener("click", (e)=>{
    e.preventDefault();
    the_game();
    });
