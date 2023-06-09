import tasksList from './data.js';
import { updateStatus } from './status.js';
import taskManager from './taskManager.js';

class DisplayElements {
  constructor() {
    this.tasksList = [];
  }

  displayTasks = (data, index) => {
    this.listElement = document.createElement('li');
    this.listElement.className = 'list-item';
    this.listElement.innerHTML = `
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

    const removeBtn = this.listElement.querySelector('.remove-icon');

    removeBtn.addEventListener('click', () => {
      taskManager.removeTask(index);
      this.displayElements();
    });

    // * Hundle task list onfocus event

    const taskInputElement = this.listElement.querySelector('.input');
    taskInputElement.addEventListener('focusin', () => {
      this.listElement.classList.add('transform-input');
    });

    // * Hundle task list focus lost event

    taskInputElement.addEventListener('blur', () => {
      this.listElement.classList.remove('transform-input');
      taskManager.updateTask(taskInputElement.value, index);
      this.displayElements();
    });

    const checkboxElement = this.listElement.querySelector('.checkboxInput');

    checkboxElement.addEventListener('change', () => {
      updateStatus(index, checkboxElement.checked);
    });

    return this.listElement;
  }

  displayElements = () => {
    const elementContainer = document.querySelector('.list-box');
    elementContainer.innerHTML = '';
    tasksList.forEach((task, index) => {
      elementContainer.appendChild(this.displayTasks(task, index));
    });
  }
}

export default DisplayElements;