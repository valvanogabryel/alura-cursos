import { getCookie } from '../utils/cookies.js';
import { alertAndRedirect, updateEditorText } from './document.js';

const socket = io('/users', {
  auth: {
    token: getCookie('access_token'),
  },
});

socket.on('connect_error', (error) => {
  alert(error);
  window.location.href = '/login';
});

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
