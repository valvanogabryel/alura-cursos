const form = document.querySelector('#novoItem');
const list = document.querySelector('ul.lista');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elementName = event.target.elements['nome'].value;
    const elementQuantity = event.target.elements['quantidade'].value;

    registerItem(elementName, elementQuantity);
})

function registerItem(name, quantity) {
    const listElement = document.createElement('li');
    listElement.className = 'item';
    listElement.innerHTML = `<strong>${quantity}</strong>${name}`
    list.appendChild(listElement);
}