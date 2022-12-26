const elementsToFilter = document.querySelectorAll('button.btn');
elementsToFilter.forEach(element => {
    element.addEventListener('click', filterBooks);
});

function filterBooks(category) {
    let filteredBooks = category.target.value == 'disponivel' ? filterByDisponibility() : filterByCategory(category);

    showBooks(filteredBooks);

    if (category.target.value == 'disponivel') {
        let totalPrice = calcTotalValue(filteredBooks);
        showAvailableTotalValue(totalPrice);
    }
}

function filterByCategory(category) {
    return books.filter(book => book.categoria == category.target.value);
}

function filterByDisponibility() {
    return books.filter(book => book.quantidade > 0);
}

function showAvailableTotalValue(totalPrice) {
    totalPriceElement.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalPrice}</span></p>
    </div>
    `
}
