import { insertDocumentLink, removeDocumentLink } from './index.js';
import { getCookie } from './utils/cookies.js';

const socket = io('/users', {
  auth: { token: getCookie('access_token') },
});

socket.on('connect_error', (error) => {
  alert(error);
  window.location.href = '/login';
});

socket.emit('get_documents', (documents) => {
  documents.forEach((document) => {
    insertDocumentLink(document.name);
  });
});

export function emitAddDocument(documentName) {
  socket.emit('add_document', documentName);
}

socket.on('add_document_interface', (documentName) => {
  insertDocumentLink(documentName);
});

socket.on('alert_duplicated_document', (message) => {
  alert(message);
});

socket.on('delete_document_interface', (documentName) => {
  removeDocumentLink(documentName);
});
