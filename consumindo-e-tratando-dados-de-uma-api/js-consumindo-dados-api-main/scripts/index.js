const city = document.getElementById('cidade');
const publicPlace = document.getElementById('endereco');
const neighbourhood = document.getElementById('bairro');
const state = document.getElementById('estado');

async function searchCEP(cepNumber) {
    const errorMessage = document.getElementById('erro');

    try {
        let response = await fetch(`https://viacep.com.br/ws/${cepNumber}/json/`);
        let cep = await response.json();
        if (cep.erro) { throw new Error('CEP inexistente...') };
        errorMessage.innerHTML = '';
        fillCepValues(cep);
    } catch (error) {
        errorMessage.innerHTML = '<p>CEP inválido... Tente outro.</p>';
        console.log(error);
    }
}

const cepInput = document.querySelector('input#cep');

cepInput.addEventListener('focusout', () => { searchCEP(cepInput.value) });

function fillCepValues(cepObj) {
    neighbourhood.value = cepObj.bairro;
    city.value = cepObj.localidade;
    publicPlace.value = cepObj.logradouro;
    state.value = cepObj.uf;
}