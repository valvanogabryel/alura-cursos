async function searchCEP(cepNumber) {
    try {
        let response = await fetch(`https://viacep.com.br/ws/${cepNumber}/json/`);
        let cep = await response.json();
        if (cep.erro) {
            throw new Error('CEP inexistente...');
        };
        fillCep(cep)
        return cep;
    } catch (error) {
        console.log(error);
    }
}

const cepInput = document.querySelector('input#cep');

cepInput.addEventListener('focusout', () => {
    searchCEP(cepInput.value)
})

function fillCep(cep) {
    const city = document.getElementById('cidade');
    const publicPlace = document.getElementById('endereco');
    const neighbourhood = document.getElementById('bairro');
    const state = document.getElementById('estado');

    neighbourhood.value = cep.bairro;
    city.value = cep.localidade;
    publicPlace.value = cep.logradouro;
    state.value = cep.uf;
}