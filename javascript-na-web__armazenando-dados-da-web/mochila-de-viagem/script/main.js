const form = document.querySelector('#novoItem');
const list = document.querySelector('ul.lista');

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

async function storageItem(name, quantity) {
    localStorage.setItem('itemName', name);
    localStorage.setItem('itemName', quantity);
}




