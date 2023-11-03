import {
  addConnection,
  findConnection,
  getUsersInDocument,
  removeConnection,
} from '../utils/connectionsDocuments.js';
import {
  deleteDocument,
  findDocument,
  updateDocument,
} from '../utils/documentDb.js';

export default function registerDocumentEvents(socket, io) {
  socket.on(
    'select_document',
    async ({ documentName, username }, returnText) => {
      const document = await findDocument(documentName);
      const connectionFound = findConnection(documentName, username);

      if (document && !connectionFound) {
        socket.join(documentName);

        socket.data = {
          userEntered: true,
        };

        addConnection({ documentName, username });

        const usersInDocument = getUsersInDocument(documentName);
        io.to(documentName).emit('show_users_interface', usersInDocument);

        returnText(document.text);
      } else {
        socket.emit('user_on_document');
      }

      socket.on('editor_text', async ({ text, documentName }) => {
        const update = await updateDocument(documentName, text);

        if (update.modifiedCount)
          socket.to(documentName).emit('editor_text_client', text);
      });

      socket.on('delete_document', async (documentName) => {
        const result = await deleteDocument(documentName);
        if (result.deletedCount)
          io.emit('delete_document_interface', documentName);
      });

      socket.on('disconnect', () => {
        if (socket.data.userEntered) {
          removeConnection(documentName, username);
          const usersInDocument = getUsersInDocument(documentName);
          io.to(documentName).emit('show_users_interface', usersInDocument);
        }
      });
    }
  );
}
