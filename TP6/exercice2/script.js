const input = document.getElementById("tache_input");
const addButton = document.getElementById("Ajouter");
const list = document.getElementById("taches_liste");
const del = document.getElementsByClassName("supprimer");
const comp = document.getElementsByClassName("complet");

addButton.addEventListener("click", (e)=>{
    e.preventDefault();
    if(input.value !== ""){
        const div = document.createElement("div");
        div.className = "task";
        tache = input.value;
        div.innerHTML = `<p>`+tache+`</p> <button type="button" class="complet">completer</button><button type="button" class="supprimer">supprimer</button>`;

        list.appendChild(div);
        input.value ="";
    }
})

list.addEventListener("click", (e) => {
    const taskItem = e.target.closest('.task');

    if (e.target.classList.contains("supprimer")) {
        e.target.closest('.task').remove();
    }else if(e.target.classList.contains("complet")){
        taskItem.classList.toggle('completed');
    }
});


