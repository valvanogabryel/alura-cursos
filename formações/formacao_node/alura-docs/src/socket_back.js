import io from './server.js';
import {
  deleteDocument,
  findDocument,
  getDocuments,
  insertDocument,
  updateDocument,
} from './utils/documentDb.js';

io.on('connection', (socket) => {
  console.log(`A client just connected: ${socket.id}`);

  socket.on('get_documents', async (returnDocuments) => {
    const documents = await getDocuments();
    returnDocuments(documents);
  });

  socket.on('add_document', async (documentName) => {
    const results = await insertDocument(documentName);
    if (results.message) io.emit('alert_duplicated_document', results.message);
    if (results.acknowledged) io.emit('add_document_interface', documentName);
  });

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

  socket.on('disconnect', (reason) => {
    console.log(`Client ${socket.id} disconnected! Reason: ${reason}`);
  });
});
