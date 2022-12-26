function getTotalValue() {
    let total = books.reduce((totalValue, book) => {
        return totalValue + book.preco;
    })

    return total;
}