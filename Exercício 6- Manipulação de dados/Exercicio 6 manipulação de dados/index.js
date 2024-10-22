let curtidas = JSON.parse(localStorage.getItem('curtidas')) || [];

function curtir() {
    let nome = document.getElementById('nome').value.trim();
    if (nome && !curtidas.includes(nome)) {
        curtidas.push(nome);
        localStorage.setItem('curtidas', JSON.stringify(curtidas));
        atualizarListaCurtidas();
    }
}

function atualizarListaCurtidas() {
    let listaCurtidas = document.getElementById('listaCurtidas');
    if (curtidas.length === 0) {
        listaCurtidas.textContent = "Ninguém curtiu";
    } else if (curtidas.length === 1) {
        listaCurtidas.textContent = `${curtidas[0]} curtiu`;
    } else if (curtidas.length === 2) {
        listaCurtidas.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    } else {
        listaCurtidas.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${curtidas.length - 2} pessoas curtiram`;
    }
}

function limparCurtidas() {
    curtidas = [];
    localStorage.removeItem('curtidas');
    atualizarListaCurtidas();
}

atualizarListaCurtidas();
