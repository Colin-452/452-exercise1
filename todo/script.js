//I am Colin
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task-input');
    const addButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list-different');

    addButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.style.textDecoration = 'line-through';
        });

        li.appendChild(removeButton);
        li.appendChild(completeButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});