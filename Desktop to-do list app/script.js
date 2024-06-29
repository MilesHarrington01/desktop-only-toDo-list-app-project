const addTaskButton = document.getElementById('addTaskButton');
addTaskButton.addEventListener('click', addTask);


function addTask(removeTask){
    let taskInput = document.getElementById('taskInput').value;
    const taskDisplay = document.getElementById('taskDisplay');

    if(taskInput.trim() !== ''){
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('taskContainer');
        const paragraph = document.createElement('p');
        paragraph.textContent = taskInput;
        paragraph.classList.add('p');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.classList.add('deleteButton');
        taskContainer.appendChild(paragraph);
        taskContainer.appendChild(deleteButton);
        taskDisplay.appendChild(taskContainer);
        document.getElementById('taskInput').value = '';
        deleteButton.addEventListener('click', function(){
            taskDisplay.removeChild(taskContainer);
        })
    }

  
}







