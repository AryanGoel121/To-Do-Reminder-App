
function settingReminder(){
    console.log('Setting a reminder')
    const remTask = document.querySelectorAll('.remTask');
    const setRem = document.querySelector('.custCont');
    
    remTask.forEach( (task) => {
        task.addEventListener('click', () => {
            console.log("Para is clicked")
            setRem.style.visibility = 'visible';
            setReminderBtn(task); 
        })
    })
}


function setReminderBtn(task){
    const remBtn = document.querySelector('.remItemBtn');
    const remDate = document.querySelector('.remDate');
    const remTime = document.querySelector('.remTime');

    remBtn.addEventListener('click', ()=>{
        console.log('button is clicked');
        console.log(task.innerText);
        console.log(remDate.value);
        console.log(remTime.value);
        // postTask(task.innerText, remDate.value, remTime.value);
    });
        
    
}