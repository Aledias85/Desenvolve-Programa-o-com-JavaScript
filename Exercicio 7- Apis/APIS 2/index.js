const postButton = document.getElementById('postButton');
const postContent = document.getElementById('postContent');
const feed = document.getElementById('feed');

let posts = [];

// Função para gerar post
function addPost(content) {
    const user = {
        name: 'Usuário Exemplo',
        avatar: 'https://i.pravatar.cc/50', // Usando um avatar aleatório
        text: content,
        likes: 0,
        date: new Date()
    };

    // Obtém uma imagem aleatória de gatinho
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            user.catImage = data[0].url; // Adiciona a imagem de gatinho ao post
            posts.unshift(user); // Adiciona o post no início da lista
            renderPosts();
        });
}

// Função para renderizar os posts
function renderPosts() {
    feed.innerHTML = '';
    posts.forEach((post, index) => {
        const postElement = document.createElement('li');
        postElement.innerHTML = `
            <div class="post-info">
                <img src="${post.avatar}" alt="Avatar">
                <div>
                    <strong>${post.name}</strong>
                    <p>${post.text}</p>
                    <img src="${post.catImage}" class="cat-image" alt="Imagem de gatinho">
                    <div class="likes">
                        <span>${post.likes} Curtidas</span>
                        <button class="like" data-index="${index}">Curtir</button>
                    </div>
                </div>
            </div>
        `;
        feed.appendChild(postElement);
    });

    // Adiciona evento de curtir a cada botão
    document.querySelectorAll('.like').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            posts[index].likes += 1;
            renderPosts(); // Atualiza a interface com o novo número de likes
        });
    });
}

// Adiciona evento ao botão de postagem
postButton.addEventListener('click', () => {
    const content = postContent.value.trim();
    if (content) {
        addPost(content);
        postContent.value = ''; // Limpa o campo após postar
    } else {
        alert('Por favor, escreva algo antes de postar.');
    }
});
