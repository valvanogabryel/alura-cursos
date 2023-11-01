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

documentTitle.textContent = documentName ?? 'Documento sem título';

selectDocument(documentName);

editorText.addEventListener('keyup', () => {
  emitEditorText({
    text: editorText.value,
    documentName,
  });
});

deleteBtn.addEventListener('click', () => {
  emitDeleteDocument(documentName);
});

export function updateEditorText(text) {
  editorText.value = text;
}

export function alertAndRedirect(name) {
  if (name === documentName) {
    alert(`Documento ${name} excluído com sucesso!`);
    window.location.href = '/';
  }
}
