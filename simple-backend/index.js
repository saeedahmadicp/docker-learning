import express from 'express';
import {MongoClient} from 'mongodb';

const app = express();
const PORT = 4000;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'testDB';

async function main() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('documents');

  return 'done.';
}

app.get('/', (req, res) => {
    res.json("I love docker!");
});

app.listen(PORT, () => {
    console.log('Your server is running on PORT:',PORT);
});