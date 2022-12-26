function applySales(books) {
    const saleValue = 0.3;
    booksOnSale = books.map(book => {
        return { ...book, preco: book.preco - (book.preco * saleValue) };
    });
    return booksOnSale;
}