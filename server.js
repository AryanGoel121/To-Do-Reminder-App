// server.js
// Including all the necessary modules
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;

// Serve static files
app.use(express.static(path.join(__dirname, 'frontEnd')));
app.use(express.json())  // letting express know that it should expect json

// Serve HTML file
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'frontEnd', 'index.html'));
});









let task = "This is coming from the database"

// Get Request for tasks from front end
app.get('/getTask', (req, res)=>{
    res.status(200).json({taskName: task});

})

app.post('/postTask', (req, res)=>{
    res.status(200).json({message: 'Your task has been received'});
    const {taskName, taskDate, taskTime} = req.body;
    console.log(taskName, taskDate, taskTime);
})




















// Database's URI/ Connection String
const uri = "mongodb+srv://aryangoel:ilovemyfamily@to-dolist.kp83yjb.mongodb.net/?retryWrites=true&w=majority&appName=To-DoList";

// Async function to connect to the databse
async function dbConnect(){
    try{
        await mongoose.connect(uri);
        console.log("Database is Connected: MongoDB");
    } catch (error) {
        console.error(error);
    }
}
// dbConnect();

// Our Port Where the server is running
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})