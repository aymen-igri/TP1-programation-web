const fr = document.getElementById("fr");
const mr = document.getElementById("mr");
const it = document.getElementById("it");
const es = document.getElementById("es");
const al = document.getElementById("al");

const fr_rep = document.getElementById("fr_rep");
const mr_rep = document.getElementById("mr_rep");
const it_rep = document.getElementById("it_rep");
const es_rep = document.getElementById("es_rep");
const al_rep = document.getElementById("al_rep");

const score = document.getElementById("score");

let corransw = 0;

function lancerQuiz(){
    if(fr.value == "paris"){
        fr_rep.innerHTML = "<div class='correct'>paris</div>";
        corransw++;
    }else{
        fr_rep.innerHTML = "<div class='wrong'>paris</div>";
    }

    if(mr.value == "rabat"){
        mr_rep.innerHTML = "<div class='correct'>rabat</div>";
        corransw++;

    }else{
        mr_rep.innerHTML = "<div class='wrong'>rabat</div>";
    }

    if(it.value == "la rome"){
        it_rep.innerHTML = "<div class='correct'>la rome</div>";
        corransw++;

    }else{
        it_rep.innerHTML = "<div class='wrong'>la rome</div>";
    }

    if(es.value == "madride"){
        es_rep.innerHTML = "<div class='correct'>madride</div>";
        corransw++;

    }else{
        es_rep.innerHTML = "<div class='wrong'>madride</div>";
    }

    if(al.value == "algerie"){
        al_rep.innerHTML = "<div class='correct'>algerie</div>";
        corransw++;

    }else{
        al_rep.innerHTML = "<div class='wrong'>algerie</div>";
    }


    score.innerHTML = `vous avez ${corransw} bonnes réponses`;
}

document.getElementById("submit").addEventListener("click",(e)=>{
    e.preventDefault();
    lancerQuiz();
});
