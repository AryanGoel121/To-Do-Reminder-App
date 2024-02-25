// Back End=============================================================================================

// Send the tasks to back end
const baseURL = 'http://localhost:8000/api/';

// Get Request
const getTask = async ()=>{
    const res = await fetch(baseURL + 'getTask');
    // console.log(res);
    const data = await res.json();
    console.log(data.taskName);
}


// POST Request
const postTask = async (task, date='', time='')=>{
    let options = {
        method: 'POST',
        body: JSON.stringify({
            taskName: task,
            taskDate: date,
            taskTime: time,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    }
    // We'll make a POST Request
    const res = await fetch(baseURL + 'postTask', options);
    console.log(res.status);
    const data = await res.json();
    console.log(data.message);
};

// const deleteTaskDB = async() =>{
//     // Logic to remove this task from the data base!!
    
// }