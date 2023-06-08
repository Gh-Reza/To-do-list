import tasksList from './data.js';
import taskManager from './taskManager.js';

const taskElement = (data, index) => {
  const listElement = document.createElement('li');
  listElement.className = 'list-item';
  listElement.innerHTML = `
    <div class="input-group">
      <input type="checkbox" name="task" id="">
      <input type="text" class="input" value="${data.description}">
    </div>
    <div class="move-icon-box">
      <ion-icon class="icon remove-icon" name="trash"></ion-icon>
      <ion-icon class="icon move-icon" name="more"></ion-icon>
    </div>
  `;

  // * Hundle remove task click

  const removeBtn = listElement.querySelector('.remove-icon');

  removeBtn.addEventListener('click', () => {
    taskManager.removeTask(index);
    displayElements();
  });

  // * Hundle task list onfocus event

  const taskInputElement = listElement.querySelector('.input');
  taskInputElement.addEventListener('focusin', () => {
    listElement.classList.add('transform-input');
  });

  // * Hundle task list focus lost event

  taskInputElement.addEventListener('blur', () => {
    listElement.classList.remove('transform-input');
    taskManager.updateTask(taskInputElement.value, index);
    displayElements();
  });

  return listElement;
};

const elementContainer = document.querySelector('.list-box');

const displayElements = () => {
  elementContainer.innerHTML = '';
  tasksList.forEach((task, index) => {
    elementContainer.appendChild(taskElement(task, index));
  });
};

export default displayElements;