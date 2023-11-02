import { emitAddDocument } from './socket_front_index.js';
import { getCookie, removeCookie } from './utils/cookies.js';

const access_token = getCookie('access_token');

const documentsList = document.querySelector('#lista-documentos');
const form = document.querySelector('#form-adiciona-documento');
const inputDocument = document.querySelector('#input-documento');
const logoutBtn = document.querySelector('#botao-logout');

logoutBtn.addEventListener('click', () => {
  removeCookie('access_token');
  alert('Usuário deslogado com sucesso!');
  window.location.href = '/login';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  emitAddDocument(inputDocument.value);
  inputDocument.value = '';
});

export function insertDocumentLink(documentName) {
  documentsList.innerHTML += `
  <a
  href="/documento/index.html?nome=${documentName}"
  id='documento-${documentName.toLowerCase()}'
  class="list-group-item list-group-item-action"
  >
    ${documentName}
  </a>`;
}

export function removeDocumentLink(documentName) {
  const document = documentsList.querySelector(
    `#documento-${documentName.toLowerCase()}`
  );

  documentsList.removeChild(document);
}
