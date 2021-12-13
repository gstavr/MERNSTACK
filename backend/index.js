// import app from './server.js';
// import mongodb from 'mongodb';
// import dotenv from 'dotenv';

const app = require('./server');
const mongodb = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.port || 8000;

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  maxPoolSize: 50,
  connectTimeoutMS: 2500,
})
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(async (client) =>
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    })
  );
