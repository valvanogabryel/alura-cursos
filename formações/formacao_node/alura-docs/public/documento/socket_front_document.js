import { getCookie } from '../utils/cookies.js';
import {
  alertAndRedirect,
  handleAuthorizationSuccess,
  updateConnectedUsers,
  updateEditorText,
} from './document.js';

const socket = io('/users', {
  auth: {
    token: getCookie('access_token'),
  },
});

socket.on('connect_error', (error) => {
  alert(error);
  window.location.href = '/login';
});

socket.on('authorization_success', handleAuthorizationSuccess);

socket.on('user_on_document', () => {
  alert('Documento já aberto em outra página...');
  window.location.href = '/';
});

socket.on('show_users_interface', (usersInDocument) => {
  updateConnectedUsers(usersInDocument);
});

function emitEditorText(data) {
  socket.emit('editor_text', data);
}

function selectDocument(dataInput) {
  socket.emit('select_document', dataInput, (text) => {
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
