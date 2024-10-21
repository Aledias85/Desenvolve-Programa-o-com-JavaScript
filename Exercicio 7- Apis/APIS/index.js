const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

searchButton.addEventListener('click', () => {
    const username = searchInput.value;
    if (!username) {
        alert('Por favor, insira um nome de usuário.');
        return;
    }
    fetch(`https://api.github.com/search/users?q=${username}`)
        .then(response => response.json())
        .then(data => {
            results.innerHTML = ''; // Limpa os resultados anteriores
            if (data.items && data.items.length > 0) {
                data.items.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <img src="${user.avatar_url}" alt="${user.login}" width="50">
                        <a href="${user.html_url}" target="_blank">${user.login}</a>
                    `;
                    results.appendChild(listItem);
                });
            } else {
                results.innerHTML = '<li>Não foram encontrados usuários para esta pesquisa</li>';
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            results.innerHTML = '<li>Erro ao buscar usuários. Tente novamente mais tarde.</li>';
        });
});
