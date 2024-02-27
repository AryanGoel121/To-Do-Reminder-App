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


// We want to close the DB connection once the page closed
// window.addEventListener('beforeunload', () => {

// })

// window.addEventListener('')