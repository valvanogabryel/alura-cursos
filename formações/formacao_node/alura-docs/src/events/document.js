import {
  deleteDocument,
  findDocument,
  updateDocument,
} from '../utils/documentDb.js';

export default function registerDocumentEvents(socket, io) {
  socket.on('select_document', async (documentName, returnText) => {
    socket.join(documentName);
    const document = await findDocument(documentName);
    if (document) returnText(document.text);
  });

  socket.on('editor_text', async ({ text, documentName }) => {
    const update = await updateDocument(documentName, text);

    if (update.modifiedCount)
      socket.to(documentName).emit('editor_text_client', text);
  });

  socket.on('delete_document', async (documentName) => {
    const result = await deleteDocument(documentName);
    if (result.deletedCount) io.emit('delete_document_interface', documentName);
  });
}
