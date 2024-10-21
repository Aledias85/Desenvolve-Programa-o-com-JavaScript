// Mudar o texto do título
document.querySelector('#titulo').textContent = "Novo Título";

// Alterar o estilo dos itens da lista
const listaItens = document.querySelectorAll('#lista li');
listaItens.forEach(item => {
    item.style.color = 'blue';  // Alterar a cor do texto para azul
    item.style.fontWeight = 'bold';  // Colocar o texto em negrito
});

// Adicionar uma classe a todos os parágrafos
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(paragrafo => {
    paragrafo.classList.add('novo-estilo');  // Adiciona uma classe chamada 'novo-estilo'
});

// Alterar o texto do botão
document.querySelector('#meuBotao').textContent = "Botão Alterado";
