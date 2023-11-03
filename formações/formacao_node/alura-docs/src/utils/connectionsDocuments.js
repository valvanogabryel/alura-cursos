const connectionsDocuments = [];

function addConnection(connection) {
  connectionsDocuments.push(connection);
}

function getUsersInDocument(documentName) {
  return connectionsDocuments
    .filter((connection) => connection.documentName === documentName)
    .map((connection) => connection.username);
}

function findConnection(documentName, username) {
  return connectionsDocuments.find(
    (connection) =>
      connection.documentName === documentName &&
      connection.username === username
  );
}

function removeConnection(documentName, username) {
  const index = connectionsDocuments.findIndex((connection) => {
    return (
      connection.documentName === documentName &&
      connection.username === username
    );
  });

  if (index !== -1) connectionsDocuments.splice(index, 1);
}

export { addConnection, getUsersInDocument, findConnection, removeConnection };
