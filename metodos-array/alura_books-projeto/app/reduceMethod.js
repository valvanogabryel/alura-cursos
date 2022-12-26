function calcTotalValue(books) {
    return Number(books.reduce((acc, book) => acc + book.preco, 0)).toFixed(2);
}