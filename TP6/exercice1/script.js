let container = document.getElementById("container");
let paragraph = document.getElementById("paragraph");

container.addEventListener("click",()=>{
    paragraph.innerHTML = "Un clic a été détecté ";
    paragraph.classList.add("p_changing_style");
    container.classList.add("d_changing_style");
});
