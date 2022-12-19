const form = document.querySelector('#novoItem');
const list = document.querySelector('ul.lista');
const items = JSON.parse(localStorage.getItem('items')) || [];

items.forEach(element => {
    console.log(element);
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elementName = event.target.elements['nome'];
    const elementQuantity = event.target.elements['quantidade'];

    registerItem(elementName.value, elementQuantity.value);

    // clean form value
    elementName.value = '';
    elementQuantity.value = '';
})

function registerItem(name, quantity) {
    const listElement = document.createElement('li');
    listElement.className = 'item';
    listElement.innerHTML = `<strong>${quantity}</strong>${name}`;
    list.appendChild(listElement);
    storageItem(name, quantity);
}

function storageItem(name, quantity) {
    const currentItem = {
        "nome": name,
        "quantity": quantity
    };

    items.push(currentItem);

    localStorage.setItem('item', JSON.stringify(items));
}




