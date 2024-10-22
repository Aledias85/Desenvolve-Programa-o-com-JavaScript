let tarefas = [];

function adicionarTarefa() {
    let descricao = document.getElementById('descricao').value.trim();
    if (descricao) {
        let novaTarefa = {
            descricao: descricao,
            status: false
        };
        tarefas.push(novaTarefa);
        atualizarListaTarefas();
        document.getElementById('descricao').value = '';
    }
}

function atualizarListaTarefas() {
    let listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        let li = document.createElement('li');
        li.className = tarefa.status ? 'concluida' : 'naoConcluida';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.onclick = () => alterarStatus(index);

        let descricao = document.createTextNode(tarefa.descricao);

        li.appendChild(checkbox);
        li.appendChild(descricao);
        listaTarefas.appendChild(li);
    });
}

function alterarStatus(index) {
    tarefas[index].status = !tarefas[index].status;
    atualizarListaTarefas();
}
