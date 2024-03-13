const inputText = document.querySelector(".inputText");
const introMsg = document.querySelector(".intro");
const itemsContainer = document.querySelector(".tasks");
const reminderContainer = document.querySelector('.custCont');
const setDateTime = document.querySelector('.setDateTimeForReminder');
arrTasks = [];

// What happends when you press enter in the input field
inputText.addEventListener("keydown", (evt) => {
    if(evt.key === "Enter"){
        taskCreated();
    }
});

// A task is created using the text in the input field
function taskCreated(){
    console.log('Enter or Plus sign is clicked');
    if(inputText.value !== ""){
        // introMsg.style.visibility = "hidden";
        let task = inputText.value;  
        inputText.value = "";
        arrTasks.push(task);

        printingTasks(task);

        // Task is being sent to the back-end which furthur puts it in the database(mongo);
        postTask(task);
    }
}

// Printing tasks by adding it to <ul class="tasks">
function printingTasks(task){
    // Making a LI to store the task;
    const listItem = document.createElement('li');
    listItem.classList.add('items');

    const paraChildElement = document.createElement('p');
    paraChildElement.setAttribute('onclick', 'clickingPara(this)');
    paraChildElement.innerText = task;

    let checkChildElement = document.createElement('i');
    checkChildElement.setAttribute('onclick', 'markComplete(this)')
    checkChildElement.classList.add("fa-solid", "fa-check", "checkMark");

    listItem.append(paraChildElement, checkChildElement);

    console.log(listItem);

    // Printing the tasks
    itemsContainer.appendChild(listItem);
}

// Marking task as complete / Deleting the task / Deleting the task from <ul class="tasks">
function markComplete(removeThisTask){
    let audio = document.querySelector("#myAudio"); // Little Fun!!!
    audio.play();
    console.log("Check mark is clicked, task removed");

    // Access parent Node
    const parentOfThisTask = removeThisTask.parentNode;

    // Delete this task from the database
    const taskToBeDeleted = parentOfThisTask.firstChild.innerText;
    console.log(taskToBeDeleted)
    deleteTask(taskToBeDeleted);
    
    // Actually deleting for User
    parentOfThisTask.remove();
    
    // // Deleting from the array of tasks
    // indexOfDelTask = arrTasks.indexOf(taskToBeDeleted);
    // console.log(taskToBeDeleted)
    // console.log(indexOfDelTask)
    // if (indexOfDelTask !== -1) {
    //     arrTasks.splice(indexOfDelTask, 1);
    // } else {
    //     console.log(`${taskToBeDeleted} not found in the array.`);
    // }
}



// Makes the Setting Reminder window VISIBLE & HIDDEN respectively
// Checking Click Toggle on Para Element
let paraClicked = false;
function clickingPara(taskNeedsReminder){
    if(!paraClicked){
        // addEventListener to reminder button
        showSetReminder(taskNeedsReminder);
    }
    else{
        // removeEventListener from reminder button
        hideSetReminder(taskNeedsReminder);
    }
    paraClicked = !paraClicked;
}


// Event listener for when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    getTasks();
})


// window.addEventListener('load', () =>{
//     getTasks();
// });
// window.addEventListener('beforeunload', ()=>{
//     getTasks();
// });