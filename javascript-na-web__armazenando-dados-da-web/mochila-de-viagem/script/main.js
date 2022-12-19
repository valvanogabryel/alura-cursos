const form = document.querySelector('#novoItem');
const list = document.querySelector('ul.lista');
const items = JSON.parse(localStorage.getItem('items')) || [];

items.forEach((element) => {
    registerItem(element.name, element.quantity);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elementName = event.target.elements['nome'];
    const elementQuantity = event.target.elements['quantidade'];

    const isInList = items.find(element => {
        return element.name === elementName.value;
    })


    if (isInList) {
        updateElement(elementQuantity);
    } else {
        registerItem(elementName.value, elementQuantity.value);
    }

    storageItem(elementName.value, elementQuantity.value);


    // clean form value
    elementName.value = '';
    elementQuantity.value = '';
});

function updateElement(quantity) {
    quantity += quantity.value;
}

function registerItem(name, quantity) {
    const listElement = document.createElement('li');
    listElement.className = 'item';
    listElement.innerHTML = `<strong>${quantity}</strong>${name}`;



    console.log(listElement)
    list.appendChild(listElement);
}

function storageItem(name, quantity) {
    const currentItem = {
        "name": name,
        "quantity": quantity,
        "id": 0
    };

    items.push(currentItem);


    localStorage.setItem('items', JSON.stringify(items));

}









