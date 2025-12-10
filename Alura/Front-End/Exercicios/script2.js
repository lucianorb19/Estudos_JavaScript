const listaTarefas = document.getElementById("listaTarefas")
const tarefaInput = document.getElementById("tarefaInput");
const salvarTarefaButton = document.getElementById("salvarTarefaButton");

salvarTarefaButton.addEventListener("click", (evento)=>{
    evento.preventDefault();
    if(tarefaInput.value === ""){
        alert("Por favor, insira uma tarefa!");
        return;
    }

    //console.log(tarefaInput.value);
    const tarefaDaLista = document.createElement("li");

    const containerTarefa = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const nomeTarefa = document.createElement("p");
    nomeTarefa.innerText = tarefaInput.value;

    containerTarefa.appendChild(checkbox);
    containerTarefa.appendChild(nomeTarefa);
    tarefaDaLista.appendChild(containerTarefa);
    listaTarefas.appendChild(tarefaDaLista);




    /*
    //CRIAÇÃO DOS ELEMENTOS HTML PARA DOM
    const tarefaDaLista = document.createElement("li");
    const containerTarefaDaLista = document.createElement("div");
    //containerTarefaDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-"+ contador++;
    const nometarefa = document.createElement("p");
    nometarefa.innerText = tarefaInput.value;

    //COLOCANDO ELEMENTOS EM HIERARQUIA
        //itemLista
            //containerItemDaLista
                //checkbox + nomeItem
    containerTarefaDaLista.appendChild(inputCheckbox);
    containerTarefaDaLista.appendChild(nometarefa);
    tarefaDaLista.appendChild(containerTarefaDaLista);
    listaTarefas.appendChild(tarefaDaLista);
    */
})