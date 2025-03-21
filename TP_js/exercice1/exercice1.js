
function calculate(){

let nbr1 = document.getElementById("nombre1");
let nbr2 = document.getElementById("nombre2");  

const num1 = parseFloat(nbr1.value) ;
const num2 = parseFloat(nbr2.value) ;
  
const r1=num1+num2;
const r2=parseFloat(nbr1.value)-parseFloat(nbr2.value);
const r3=parseFloat(nbr1.value)*parseFloat(nbr2.value);
const r4=parseFloat(nbr1.value)/parseFloat(nbr2.value);


const resultat1 = document.getElementById("resultat");

resultat1.innerHTML =  `<div>${num1} + ${num2} = ${r1}</div>
                        <div>${num1} - ${num2} = ${r2}</div>
                        <div>${num1} * ${num2} = ${r3}</div>
                        <div>${num1} / ${num2} = ${r4}</div>`;
}


document.getElementById("submit").addEventListener("click",(e)=>{
    e.preventDefault();
    calculate();
})