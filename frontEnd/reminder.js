// Adding and Removing Event Listeners as needed
function showSetReminder(taskNeedsReminder){
    reminderContainer.classList.toggle("toggleVisibility");
    taskNeedsReminder.parentNode.classList.toggle("checked");
    taskData = taskNeedsReminder.innerText;
    
    // Add Event Listener to Set The Reminder
    setDateTime.addEventListener('click', someFunc);
}


function hideSetReminder(taskNeedsReminder){
    // Remove Event Listener from Set The Reminder
    setDateTime.removeEventListener('click', someFunc);

    reminderContainer.classList.toggle("toggleVisibility");
    taskNeedsReminder.parentNode.classList.toggle("checked");
}

function someFunc(){
    sendReminderData(taskData);
}


// Send the Reminder Data to the Back-End
function sendReminderData(taskData){
    console.log("Set the reminder button was clicked");
    const setDate = document.querySelector('.setDate');
    const setTime = document.querySelector('.setTime');

    console.log(taskData);
    console.log(setDate.value);
    console.log(setTime.value);
    // postTask(taskData, setDate.value, setTime.value);

    // should rather be a post request, cause task are already in the database
}