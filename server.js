// server.js
// Including all the necessary modules
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;

// Serve static files
app.use(express.static(__dirname));

// Serve HTML file
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Database's URI/ Connection String
const uri = "mongodb+srv://aryangoel:ilovemyfamily@to-dolist.kp83yjb.mongodb.net/?retryWrites=true&w=majority&appName=To-DoList";

// Async function to connect to the databse
async function dbConnect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}
dbConnect();

// Our Port Where the server is running
app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})