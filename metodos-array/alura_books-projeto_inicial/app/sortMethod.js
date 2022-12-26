const priceBtn = document.getElementById('btnOrdenarPorPreco');

priceBtn.addEventListener('click', sortBooks);

function sortBooks() {
    let sortedBooks = books.sort((a, b) => a.preco - b.preco);
    createBook(sortedBooks);
}