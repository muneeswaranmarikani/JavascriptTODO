function addElement() {
    
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    taskInput.value = '';

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');

    const taskItem = document.createElement('div');
    taskItem.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.className = 'intBorder';
    checkbox.type = 'checkbox';
    
    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = checkbox.id;

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskItem.classList.add('completed');
        } else {
            taskItem.classList.remove('completed');
        }
    });

    const taskPara = document.createElement('p');
    taskPara.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(checkbox);
    taskItem.appendChild(checkboxLabel);
    taskItem.appendChild(taskPara);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}
