import { alertAndRedirect, updateEditorText } from './document.js';

const socket = io();

function emitEditorText(data) {
  socket.emit('editor_text', data);
}

function selectDocument(documentName) {
  socket.emit('select_document', documentName, (text) => {
    updateEditorText(text);
  });
}

function emitDeleteDocument(documentName) {
  socket.emit('delete_document', documentName);
}

socket.on('editor_text_client', (text) => {
  updateEditorText(text);
});

socket.on('delete_document_interface', (documentName) => {
  alertAndRedirect(documentName);
});

export { emitEditorText, selectDocument, emitDeleteDocument };
