// server.js
// Including all the necessary modules
const express = require('express');
const mongoose = require('mongoose');
const DB = require('./databaseManip');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;

// Serve static files
app.use(express.static(path.join(__dirname, 'frontEnd')));
app.use(express.json())  // letting express know that it should expect json

// Serve HTML file, Main Landing Page
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'frontEnd', 'index.html'));
});


// Handling Data Manipulation Requests form database-----------------------------------------------------------------------------
app.get('/api/getTask', (req, res)=>{
    res.status(200).json({taskName: task});
})


app.post('/api/postTask', (req, res)=>{
    res.status(200).json({message: 'Task added to DB!'});
    
    // Parsing the request body to send to the database
    const {taskName, taskDate, taskTime} = req.body;
    console.log(taskName, taskDate, taskTime);
    const task = {
        taskContent: taskName,
        date: taskDate,
        time: taskTime,
    }
    DB.postMain(task);
})


app.put('/api/updateTask', (req, res)=>{
    res.status(200).json({message: 'Task Reminder Updated!'});

    // Formatting the data that needs to be sent to DB
    const {taskName, taskDate, taskTime} = req.body;
    console.log(taskName, taskDate, taskTime);
    const task = {
        taskContent: taskName,
        date: taskDate,
        time: taskTime,
    }
    DB.updateMain(task);
})


app.delete('/api/deleteTask', (req, res)=>{
    res.status(200).json({message: 'Given Task Deleted!'});

    // Parse the body and send the delete request to db
    const {taskName} = req.body;
    console.log(taskName);
    DB.deleteMain(taskName);
})

//---------------------------------------------------------------------------------------------------------------

// Our Port Where the server is running
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})