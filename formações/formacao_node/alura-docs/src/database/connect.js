import { MongoClient } from 'mongodb';

const uri =
  'mongodb+srv://admin:gabryelval123@cluster0.6cbuths.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {});

let documentsCollections;

try {
  await client.connect();

  const db = client.db('alura_websockets');
  documentsCollections = db.collection('documents');

  console.log('Connected to Database!');
} catch (err) {
  console.error(err);
}

export { documentsCollections };
