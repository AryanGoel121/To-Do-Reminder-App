const inputText = document.querySelector(".inputText");
const introMsg = document.querySelector(".intro");
const itemsContainer = document.querySelector(".tasks");
const setRem = document.querySelector('.custCont');
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
        // postTask(task);
    }
}

// Printing tasks by adding it to <ul class="tasks">
function printingTasks(task){
    // Making a LI to store the task;
    const listItem = document.createElement('li');
    listItem.classList.add('items');

    const paraChildElement = document.createElement('p');
    paraChildElement.setAttribute('onclick', 'showSetReminder(this)');
    paraChildElement.innerText = task;

    let checkChildElement = document.createElement('i');
    checkChildElement.setAttribute('onclick', 'markComplete(this)')
    checkChildElement.classList.add("fa-solid", "fa-check", "checkMark");

    listItem.append(paraChildElement, checkChildElement);

    console.log(listItem);

    // Printing the tasks
    itemsContainer.appendChild(listItem);
}


// Makes the Setting Reminder window VISIBLE & HIDDEN respectively
function showSetReminder(taskNeedsReminder){
    setRem.classList.toggle("toggleVisibility");
    taskNeedsReminder.parentNode.classList.toggle("checked");
    console.log("Paragraph clicked");
    // This will furthur send the reminder data to backend
}


// Marking task as complete / Deleting the task / Deleting the task from <ul class="tasks">
function markComplete(removeThisTask){
    let audio = document.querySelector("#myAudio"); // Little Fun!!!
    audio.play();
    console.log("Check mark is clicked, task removed");
    removeThisTask.parentNode.remove();
}