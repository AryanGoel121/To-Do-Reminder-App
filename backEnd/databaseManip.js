// Connecting to database using MongoDB Driver
const {MongoClient} = require('mongodb');
const uri = "";
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
connectDB();
// Pointing to the right collection
dbName = 'to_do';
collName = 'tasks';
tasksCollection = client.db(dbName).collection(collName);



// Data Manipulation
const postMain = async(task)=>{
    try{
        // await connectDB();
        let result = await tasksCollection.insertOne(task);
        console.log(`Task has been added: ${result.insertedId}`);
    }catch(err){
        console.error(err);
    }
    // finally{
    //     client.close();
    // }
}


const updateMain = async (task) =>{
    try{
        // await connectDB();
        // functoin for adding task reminder
        const update = {
            date: `${task.date}`,
            time: `${task.time}`,
        }
        let result = await tasksCollection.findOneAndUpdate({taskContent: `${task.taskContent}`}, {$set: update});
        console.log(`Task Updated!`);
    } catch(err){
        console.error(err);
    } 
    // finally{
    //     client.close();
    // }
}


const deleteMain = async(taskToBeDeleted) =>{
    try{
        // await connectDB();
        let result = await tasksCollection.findOneAndDelete({taskContent: `${taskToBeDeleted}`});
        console.log(`Task Deleted from DB!`);
    }catch(err){
        console.error(err);
    }
    // finally{
    //     client.close();
    // }
}

module.exports = {
    deleteMain,
    updateMain,
    postMain,
}
