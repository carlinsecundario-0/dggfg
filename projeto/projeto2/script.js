document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtenha os valores do formulário
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementId('end-date').value;
    const duration = document.getElementById('duration').value;
    const opinion = document.getElementById('opinion').value;
    const quote = document.getElementById('quote').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const cover = document.getElementById('cover').value;

    // Crie um contêiner para o cartão do livro
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    // Adicione a imagem da capa do livro
    const bookCover = document.createElement('img');
    bookCover.src = cover;
    bookCover.alt = 'Capa do Livro';
    bookCard.appendChild(bookCover);

    // Adicione os detalhes do livro
    const bookDetails = document.createElement('div');
    bookDetails.innerHTML = `
        <h3>${title}</h3>
        <p>Autor: ${author}</p>
        <p>Data de Início: ${startDate}</p>
        <p>Data de Término: ${endDate}</p>
        <p>Tempo de Leitura: ${duration} dias</p>
        <p>Opinião: ${opinion}</p>
        <p>Frase Interessante: "${quote}"</p>
        <div class="rating">${generateStars(rating)}</div>
    `;
    bookCard.appendChild(bookDetails);

    // Adicione o botão de excluir
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', function () {
        bookCard.remove();
    });
    bookCard.appendChild(deleteBtn);

    // Adicione o cartão do livro ao contêiner de livros
    document.getElementById('books-container').appendChild(bookCard);

    // Limpe o formulário
    document.getElementById('book-form').reset();
});

function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<span class="star">★</span>';
        } else {
            stars += '<span class="star">☆</span>';
        }
    }
    return stars;
}
