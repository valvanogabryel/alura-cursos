const form = document.querySelector('#novoItem');
const list = document.querySelector('ul.lista');
const items = JSON.parse(localStorage.getItem('items')) || [];

items.forEach((element) => {
    registerItem(element);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elementName = event.target.elements['nome'];
    const elementQuantity = event.target.elements['quantidade'];

    const isInList = items.find(element => element.name === elementName.value);

    const currentItem = {
        "name": elementName.value,
        "quantity": elementQuantity.value
    };

    if (isInList) {
        currentItem.id = isInList.id;

        updateElement(currentItem);

        items[items.findIndex(element => element.id === isInList.id)] = currentItem;
    } else {
        currentItem.id = items[items.length - 1] ? (items[items.length - 1]).id + 1 : 0;
        registerItem(currentItem);
        items.push(currentItem);
    }

    storageItem();

    elementName.value = '';
    elementQuantity.value = '';
});

function updateElement(item) {
    document.querySelector(`[data-id='${item.id}']`).innerHTML = item.quantity;
    storageItem();
}


function registerItem(item) {
    const listElement = document.createElement('li');
    listElement.className = 'item';

    const listNumber = document.createElement('strong');
    listNumber.innerHTML = item['quantity'];
    listNumber.dataset.id = item.id;
    listElement.appendChild(listNumber)

    listElement.innerHTML += item['name'];

    listElement.appendChild(createDeleteButton(item.id));

    list.appendChild(listElement);
}

function storageItem() {
    localStorage.setItem('items', JSON.stringify(items));
}

function createDeleteButton(id) {
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'X';
    deleteBtn.addEventListener('click', function () {
        removeItem(this.parentNode, id);
    })

    return deleteBtn;
}

function removeItem(element, id) {
    element.remove();
    items.splice(element => element.id === id, 1);
    localStorage.setItem('items', JSON.stringify(items));
}








