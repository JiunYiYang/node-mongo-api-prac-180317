// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// if update to mongodb@3, need to revise db->client
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect MongoDB server');
  }

  console.log('Connected to MongoDB server');

// findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5aad2c6606d66374a54a4ef7')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

// prac
    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5aad2d773cdcd374d4450bf4')
    }, {
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  // db.close();
});
