document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newTaskInput = document.getElementById('newTask');
        const taskText = newTaskInput.value;

        if (taskText.trim() !== '') {
            const newTaskItem = document.createElement('li');
            newTaskItem.textContent = taskText;

            newTaskItem.addEventListener('click', function() {
                newTaskItem.classList.toggle('completed');
            });

            taskList.appendChild(newTaskItem);
            newTaskInput.value = '';
        }
    });
});