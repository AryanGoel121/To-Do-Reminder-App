// server.js
// Including all the necessary modules
const express = require('express');
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;

// const {main} = require('./dataManipDB');

// Serve static files
app.use(express.static(path.join(__dirname, 'frontEnd')));
app.use(express.json())  // letting express know that it should expect json

// Serve HTML file
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'frontEnd', 'index.html'));
});


// Get Request for tasks from front end
app.get('/api/getTask', (req, res)=>{
    res.status(200).json({taskName: task});

})

app.post('/api/postTask', (req, res)=>{
    res.status(200).json({message: 'Your task has been received'});
    
    // Parsing the request body to send to the database
    const {taskName, taskDate, taskTime} = req.body;
    console.log(taskName, taskDate, taskTime);
    setVariablesSendDB(taskName, taskDate, taskTime);
})



// Connecting to database using MongoDB Driver

const uri = "mongodb+srv://aryangoel:ilovemyfamily@to-dolist.kp83yjb.mongodb.net/?retryWrites=true&w=majority&appName=To-DoList";
const client = new MongoClient(uri);

// Connecting...
const connectDB = async() => {
    try{
        await client.connect();
        console.log("Database is Connected");
    }catch(err){
        console.error(err);
    }
}

// Pointing to the right collection
dbName = 'To-Do';
collName = 'tasks';
tasksCollection = client.db(dbName).collection(collName);


// Posting format
const setVariablesSendDB = (taskCont, taskD, taskT) =>{
    task = {
        taskContent: taskCont,
        taskDate: taskD,
        taskTime: taskT,
    }
    main();
}

const main = async()=>{
    try{
        await connectDB();

        let result = await tasksCollection.insertOne(task);
        console.log(`Task has been added: ${result.insertedId}`);
    }catch(err){
        console.error(err);
    }finally{
        client.close();
    }
}



















// // Database's URI/ Connection String
// const uri = "mongodb+srv://aryangoel:ilovemyfamily@to-dolist.kp83yjb.mongodb.net/?retryWrites=true&w=majority&appName=To-DoList";

// // Async function to connect to the databse
// async function dbConnect(){
//     try{
//         await mongoose.connect(uri);
//         console.log("Database is Connected: MongoDB");
//     } catch (error) {
//         console.error(error);
//     }
// }
// // dbConnect();

// Our Port Where the server is running
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})