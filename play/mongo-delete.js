// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// if update to mongodb@3, need to revise db->client
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect MongoDB server');
  }

  console.log('Connected to MongoDB server');

// deleteMany
  // db.collection('Todos').deleteMany({text: 'Do something'}).then((result) => {
  //   console.log(result);
  // });

// deleteOne
  // db.collection('Todos').deleteOne({text: 'Do something'}).then((result) => {
  //   console.log(result);
  // });

// findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    console.log(result);
  });

  // db.close();
});
