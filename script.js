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