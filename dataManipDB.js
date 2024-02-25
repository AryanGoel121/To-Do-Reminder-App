// const main = async()=>{
//     try{
//         await connectDB();

//         let result = await tasksCollection.insertOne(task);
//         console.log(`Task has been added: ${result.insertedId}`);
//     }catch(err){
//         console.error(err);
//     }finally{
//         client.close();
//     }
// }

// module.exports = {
//     main,
// };