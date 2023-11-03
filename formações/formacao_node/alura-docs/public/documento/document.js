import {
  emitDeleteDocument,
  emitEditorText,
  selectDocument,
} from './socket_front_document.js';

const params = new URLSearchParams(window.location.search);
const documentName = params.get('nome');

const editorText = document.querySelector('#editor-texto');
const documentTitle = document.querySelector('#titulo-documento');
const deleteBtn = document.querySelector('#excluir-documento');
const connectedUsers = document.querySelector('#usuarios-conectados');

documentTitle.textContent = documentName ?? 'Documento sem título';

export function handleAuthorizationSuccess({ name: username }) {
  selectDocument({ documentName, username });
}

editorText.addEventListener('keyup', () => {
  emitEditorText({
    text: editorText.value,
    documentName,
  });
});

deleteBtn.addEventListener('click', () => {
  emitDeleteDocument(documentName);
});

function updateConnectedUsers(usersInDocument) {
  connectedUsers.innerHTML = '';

  usersInDocument.forEach((user) => {
    connectedUsers.innerHTML += `<li class="list-group-item">${user}</li>`;
  });
}

function updateEditorText(text) {
  editorText.value = text;
}

function alertAndRedirect(name) {
  if (name === documentName) {
    alert(`Documento ${name} excluído com sucesso!`);
    window.location.href = '/';
  }
}

export { updateConnectedUsers, updateEditorText, alertAndRedirect };
