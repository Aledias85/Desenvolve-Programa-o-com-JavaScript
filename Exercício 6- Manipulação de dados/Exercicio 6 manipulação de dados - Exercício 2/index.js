let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function adicionarTarefa() {
    let descricao = document.getElementById('descricao').value.trim();
    if (descricao) {
        let novaTarefa = {
            descricao: descricao,
            status: false
        };
        tarefas.push(novaTarefa);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
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

        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.onclick = () => excluirTarefa(index);

        li.appendChild(checkbox);
        li.appendChild(descricao);
        li.appendChild(botaoExcluir);
        listaTarefas.appendChild(li);
    });
}

function alterarStatus(index) {
    tarefas[index].status = !tarefas[index].status;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    atualizarListaTarefas();
}

function excluirTarefa(index) {
    tarefas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    atualizarListaTarefas();
}

atualizarListaTarefas();
