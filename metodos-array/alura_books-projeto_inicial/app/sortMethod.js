const priceBtn = document.getElementById('btnOrdenarPorPreco');

priceBtn.addEventListener('click', sortBooks);

function sortBooks() {
    let sortedBooks = books.sort(function (a, b) {
        return a - b;
    });

    createBook(sortedBooks);
}