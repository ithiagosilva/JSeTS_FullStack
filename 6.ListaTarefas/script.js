let containerLista = document.querySelector('.container-lista');
let inputInserirTarefa = document.getElementById('campo-inserir-tarefa');
let btnAdicionar = document.getElementById('btn-adicionar');
let containerTarefas = document.querySelector('.container-tarefas');
let tarefas = [];

function criaTarefa(content) {
    let liItemTarefa = document.createElement('li');
    containerTarefas.appendChild(liItemTarefa);

    let p = document.createElement('p');
    p.setAttribute('class', "tarefa-content")
    p.innerHTML = `${content}`;

    let btnDel = document.createElement('button');
    btnDel.innerText = "-";
    btnDel.style.backgroundImage = "linear-gradient(45deg,rgb(248, 63, 106),rgb(255, 156, 34))"
    btnDel.addEventListener('click', () => {
        let conteudoTarefa = liItemTarefa.querySelector('.tarefa-content').innerText;
        containerTarefas.removeChild(liItemTarefa);
        for (let i = 0; i < tarefas.length; i++) {
            if (tarefas[i] === conteudoTarefa) {
                tarefas.splice(i, 1);
            }
        }
        removerMsg();
        salvarTarefa();
    });
    
    liItemTarefa.appendChild(p);
    liItemTarefa.appendChild(btnDel);
    tarefas.push(liItemTarefa.querySelector('.tarefa-content').innerText);
    inputInserirTarefa.value = "";
}

let tarefasJSON = [];
function salvarTarefa() {
    tarefasJSON = JSON.stringify(tarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

let tarefasJSONConv = [];
function carregarTarefas() {
    let local = localStorage.getItem('tarefas')
    tarefasJSONConv = JSON.parse(local);
    for (let i = 0; i < tarefasJSONConv.length; i++) {
        criaTarefa(tarefasJSONConv[i]);
    }
};
carregarTarefas();

function removerMsg() {
    if (containerLista.lastChild === msg) {
        containerLista.removeChild(msg);
    }
};

let msg = document.createElement('p');
msg.style.color = "red";
btnAdicionar.addEventListener('click', () => {
    if (inputInserirTarefa.value) {
        removerMsg();
        criaTarefa(inputInserirTarefa.value);
        salvarTarefa();
    } else {
        msg.innerText = "Não inseriu nada";
        containerLista.appendChild(msg);
    }
});
