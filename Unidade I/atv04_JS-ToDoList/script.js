function saveTasks() {
  const tasks = [];
  const lis = document.querySelectorAll('#gameList li');
  lis.forEach(li => {
    const text = li.firstChild.textContent;
    const [name, category] = text.split(' - ');
    const completed = li.classList.contains('completed');
    tasks.push({ name, category, completed });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskList = document.getElementById('gameList');
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.name + ' - ' + task.category;
    if (task.completed) {
      li.classList.add('completed');
    }

    const mark = document.createElement('input');
    mark.type = 'checkbox';
    mark.className = 'mark';
    mark.checked = task.completed;
    mark.addEventListener('change', () => {
      li.classList.toggle('completed');
      saveTasks();
    });
    li.appendChild(mark);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'X';
    deleteButton.className = 'deleteBtn';
    deleteButton.addEventListener('click', () => {
      li.remove();
      saveTasks();
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}

function addTask() {
  const gameInput = document.getElementById('gameInput');
  const gameCategoria = document.getElementById('gameCategoria');
  const taskList = document.getElementById('gameList');

  if (gameInput.value.trim() !== '' && gameCategoria.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = gameInput.value + ' - ' + gameCategoria.value;

    const mark = document.createElement('input');
    mark.type = 'checkbox';
    mark.className = 'mark';
    mark.addEventListener('change', () => {
      li.classList.toggle('completed');
      saveTasks();
    });
    li.appendChild(mark);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'X';
    deleteButton.className = 'deleteBtn';
    deleteButton.addEventListener('click', () => {
      li.remove();
      saveTasks();
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    gameInput.value = '';
    gameCategoria.value = '';
    saveTasks();
  }
}

loadTasks();
