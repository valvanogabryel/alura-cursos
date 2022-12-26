const elementsToFilter = document.querySelectorAll('button.btn');
elementsToFilter.forEach(element => {
    element.addEventListener('click', filterBooks);
});

function filterBooks(category) {
    let filteredBooks = books.filter(book => book.categoria == category.target.value);

    createBook(filteredBooks);
}