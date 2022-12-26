const booksSection = document.getElementById('livros');
const totalPriceElement = document.getElementById('valor_total_livros_disponiveis');

function showBooks(books) {
  booksSection.innerHTML = '';
  totalPriceElement.innerHTML = '';
  books.forEach(book => {
    let isAvailable = book.quantidade > 0 ? '' : 'indisponivel';
    booksSection.innerHTML += `
    <div class="livro">
      <img class="livro__imagens ${isAvailable}" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$ ${book.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>`
  });
}