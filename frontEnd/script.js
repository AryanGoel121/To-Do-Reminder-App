// Jai Shree Ram
let plusSign = document.querySelector("#plus");
let inputText = document.querySelector(".inputText");
let itemsContainer = document.querySelector(".tasks"); // all the tasks go in here
let introMsg = document.querySelector(".intro");


// Function To Capture & Update Text in the List
let arrTasks = []; // All the tasks and the HISTORY will be stored here;
let allTasks = []; // All the HTML items will be stored here;

// Input Methods
plusSign.addEventListener("click", () => {
    taskCreated();
});

inputText.addEventListener("keydown", (evt) => {
    if(evt.key === "Enter"){
        taskCreated();
    }
});

// Creating the task
function taskCreated(){
    if(inputText.value !== ""){
        introMsg.style.visibility = "hidden";
        let task = inputText.value;
        inputText.value = "";
        arrTasks.push(task);

        pushIntoItems(task);
        postTask(task);
    }
}

// Making HTML and printing the tasks
function pushIntoItems(task){
    // Making a div to store everything;
    const divElement = document.createElement('div');
    divElement.classList.add('items');

    const paraChildElement = document.createElement('p');
    paraChildElement.innerText = task;

    let checkChildElement = document.createElement('i');
    checkChildElement.classList.add("fa-solid", "fa-check", "checkMark");
    checkChildElement.addEventListener('click',()=>{
        markAsComplete(checkChildElement);
        emptyList();
    })

    divElement.append(paraChildElement, checkChildElement);

    console.log(divElement);

    allTasks.push(divElement);
    displayTasks(allTasks);
}

// Displaying all the Tasks
function displayTasks(allTasks){
    // I need to get the tasks from server
    // getTask();
    allTasks.forEach((task) => {
        itemsContainer.appendChild(task);
    });
}

// Mark as Complete
function markAsComplete(checkChildElement){
    let audio = document.querySelector("#myAudio"); // Little Fun!!!
    audio.play();

    allTasks.forEach((task) => {
        let taskContent = task.querySelector("p").innerText;
        let toBeDeletedContent = checkChildElement.previousElementSibling.innerText;

        if(taskContent == toBeDeletedContent){
            const indexDelete = allTasks.indexOf(task);

            const deleted = allTasks.splice(indexDelete, 1);
            console.log(deleted);

            // Delete all the pre-existing items and print the available ones;
            deleteAllItems();
            displayTasks(allTasks);
        }
    });
}

// Delete all items first to print a fresh list of tasks;
function deleteAllItems(){
    const deleteAll = document.querySelectorAll(".items");
    deleteAll.forEach((item)=>{
        item.remove();
    });
}

// Check for Empty
function emptyList(){
    let div = document.querySelector(".tasks");
    if(div.innerText.trim() === ''){
        introMsg.style.visibility = "visible";
    }
}


// Send the tasks to back end
const baseURL = 'http://localhost:8000/';

// Get Request
const getTask = async ()=>{
    const res = await fetch(baseURL + 'getTask');
    // console.log(res);
    const data = await res.json();
    console.log(data.name);
}
// getTask();


let task = 'Complete Connection!';
// POST Request
const postTask = async (task, date='', time='')=>{
    let options = {
        method: 'POST',
        body: JSON.stringify({
            taskName: task,
            date: date,
            time: time,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    }
    // We'll make a POST Request
    const res = await fetch(baseURL + 'postTask', options)
    console.log(res.status);
    const data = await res.json();
    console.log(data.message);
};