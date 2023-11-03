import { documentsCollections } from '../database/connect.js';

function getDocuments() {
  const documents = documentsCollections.find().toArray();
  return documents;
}

async function insertDocument(documentName) {
  try {
    const documentAlreadyExist = Boolean(await findDocument(documentName));

    if (documentAlreadyExist) {
      throw new Error(`Documento ${documentName} já cadastrado.`);
    }

    const documentToInsert = documentsCollections.insertOne({
      name: documentName,
      text: '',
    });

    return documentToInsert;
  } catch (err) {
    return {
      message: err.message,
    };
  }
}

function findDocument(documentName) {
  const document = documentsCollections.findOne({
    name: documentName,
  });
  return document;
}

function updateDocument(documentName, text) {
  const updatedDocument = documentsCollections.updateOne(
    {
      name: documentName,
    },
    {
      $set: {
        text,
      },
    }
  );

  return updatedDocument;
}

async function deleteDocument(documentName) {
  const deletedDocument = await documentsCollections.deleteOne({
    name: documentName,
  });

  return deletedDocument;
}

export {
  getDocuments,
  insertDocument,
  updateDocument,
  deleteDocument,
  findDocument,
};
