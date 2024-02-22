// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://aryangoel:ilovemyfamily@to-dolist.kp83yjb.mongodb.net/Tasks";

// MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(client => {
//         console.log("Connected to MongoDB");

//         const db = client.db('Tasks');
//         const collection = db.collection('task');

//         collection.insertOne({ name: 'John Doe' })
//             .then(result => {
//                 console.log('Document inserted:', result.insertedId);
//             })
//             .catch(error => {
//                 console.error('Error inserting document:', error);
//             });

//         client.close();
// })
// .catch(error => {
//     console.error('Error connecting to MongoDB:', error);
//   });