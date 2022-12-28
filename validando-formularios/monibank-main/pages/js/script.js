const formElements = document.querySelectorAll('[required]');
formElements.forEach(element => {
    element.addEventListener('blur', () => {
        verifyfield(element);
    })
})

function verifyfield(field) {
    console.log(field)
} 
