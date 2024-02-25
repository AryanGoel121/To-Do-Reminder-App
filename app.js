const {MongoClient} = require('mongodb');
const uri = require('./db');
const { copyFileSync } = require('fs');

console.log(uri);

const client = new MongoClient(uri);

const dbname = "Tasks";
const collName = "task";

const taskCollection = client.db(dbname).collection(collName);

const connectDB = async() =>{
    try{
        await client.connect();
        console.log(`Connected to the ${dbname} database`);
    } catch(err){
        console.error(err);
    }
}

const sampleTask = {
    taskData: "Hello, this is my first task",
    taskDate: "2024-02-24",
    taskTime: "08:00 P.M.",
}

const sampleTasks = [
    {
        taskData: "Hello, this is my first task",
        taskDate: "2024-02-24",
        taskTime: "08:00 P.M.",
    },
    {
        taskData: "Aryan Goel is the best",
        taskDate: "2024-02-25",
        taskTime: "07:00 A.M.",
    }
]

const main = async()=>{
    try{
        await connectDB();
        // let result = await taskCollection.insertOne(sampleTask);
        await taskCollection.deleteMany({});
        let result = await taskCollection.insertMany(sampleTasks);
        console.log(`Inserted Docuement: ${result.insertedIds}, ${result.insertedCount}`);
        // const dbList = await client.db().admin().listDatabases();
        // dbList.databases.forEach(db=>{
        //     console.log(`${db.name}`);
        // })
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
    }
}

main();