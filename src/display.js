import tasksList from './data.js';
import updateStatus from './status.js';
import taskManager from './taskManager.js';

class DisplayElements {
  constructor() {
    this.tasksList = [];
  }

  displayTasks = (data, index) => {
    const listElement = document.createElement('li');
    listElement.className = 'list-item';
    listElement.innerHTML = `
      <div class="input-group">
        <input type="checkbox" class="checkboxInput" name="task" id="">
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
      this.displayElements();
    });

    // * Hundle task list onfocus event

    const taskInputElement = listElement.querySelector('.input');
    taskInputElement.addEventListener('focusin', () => {
      listElement.classList.add('transform-input');
    });

    // * Hundle task list focus lost event

    taskInputElement.addEventListener('blur', () => {
      if (taskInputElement.value === '') {
        this.displayElements();
        return;
      }
      listElement.classList.remove('transform-input');
      taskManager.updateTask(taskInputElement.value, index);
      this.displayElements();
    });

    const checkboxElement = listElement.querySelector('.checkboxInput');

    checkboxElement.addEventListener('change', () => {
      updateStatus(index, checkboxElement.checked);
    });

    return listElement;
  }

  displayElements = () => {
    const elementContainer = document.querySelector('.list-box');
    elementContainer.innerHTML = '';
    tasksList.forEach((task, index) => {
      elementContainer.appendChild(this.displayTasks(task, index));
    });
    // * Check tasks status

    const checkboxElement = document.querySelectorAll('.checkboxInput');

    tasksList.forEach((element, index) => {
      if (element.completed) checkboxElement[index].checked = true;
    });
  }
}

export default DisplayElements;