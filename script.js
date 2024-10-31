function addTask() {
    const title = document.getElementById('task-title').value.trim();
    const desc = document.getElementById('task-desc').value.trim();

    if (!title || !desc) {
        alert("Please fill out both fields");
        return;
    }

    const taskList = document.getElementById('task-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${title}</td>
        <td>${desc}</td>
        <td><button class="delete-btn" onclick="deleteTask(this)">X</button></td>
    `;

    taskList.appendChild(row);

    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
}

function deleteTask(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
