async function searchCEP() {
    let response = await fetch('https://viacep.com.br/ws/21073430/json/');
    let cep = await response.json();
    return cep;
}




//     .then(response => response.json())
//     .then(cepObject => {
//         if (cepObject.erro) {
//             throw new Error('Esse Cep não existe');
//         } else console.log(cepObject);
//     })
//     .catch(error => console.log(error))
//     .finally(message => console.log('Processamento concluído'));

searchCEP()
console.log(cep);




