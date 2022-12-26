let books = [];
async function getBooks() {
    let response = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json');
    books = await response.json();
    let booksOnSale = applySales(books);
    showBooks(booksOnSale);
}

getBooks();


