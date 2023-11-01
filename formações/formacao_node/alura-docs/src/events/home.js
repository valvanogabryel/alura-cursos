import { getDocuments, insertDocument } from '../utils/documentDb.js';

export default function registerHomeEvents(socket, io) {
  socket.on('get_documents', async (returnDocuments) => {
    const documents = await getDocuments();
    returnDocuments(documents);
  });

  socket.on('add_document', async (documentName) => {
    const results = await insertDocument(documentName);
    if (results.message) io.emit('alert_duplicated_document', results.message);
    if (results.acknowledged) io.emit('add_document_interface', documentName);
  });
}
