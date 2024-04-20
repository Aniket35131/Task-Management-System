let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.textContent = task.name;
        if (task.completed) {
            li.classList.add('completed');
        }

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => toggleComplete(index));

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(completeButton);

        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskName = taskInput.value.trim();
    if (taskName === '') return;

    tasks.push({ name: taskName, completed: false });
    taskInput.value = '';
    renderTasks();
}

function editTask(index) {
    const newName = prompt('Enter new task name:');
    if (newName !== null && newName.trim() !== '') {
        tasks[index].name = newName.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Initial rendering
renderTasks();
