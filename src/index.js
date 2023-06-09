import './style.css';
import DisplayElements from './display.js';
import taskManager from './taskManager.js';
import tasksList from './data.js';
import updateLocalStorage from './localStorage.js';

const ob = new DisplayElements();
ob.displayElements();

// * Add functionality

const inputElement = document.querySelector('.addInput');

inputElement.addEventListener('keydown', (e) => {
  if ((e.keyCode !== 13 || e.key !== 'Enter') || inputElement.value === '') return;
  taskManager.addTask(inputElement.value);
  inputElement.value = '';
  ob.displayElements();
});

const enterIconElement = document.querySelector('.enter-icon');

enterIconElement.addEventListener('click', () => {
  if (inputElement.value === '') { return; }
  taskManager.addTask(inputElement.value);
  ob.displayElements();
  inputElement.value = '';
});

// * Delete all checkec

const clearChecked = document.querySelector('.removeBtn');

clearChecked.addEventListener('click', () => {
  const temArr = tasksList.filter((task) => !task.completed);
  tasksList.splice(0);
  temArr.forEach((elem) => {
    tasksList.push(elem);
  });

  for (let i = 0; i < tasksList.length; i += 1) {
    tasksList[i].index = i + 1;
  }
  updateLocalStorage();
  ob.displayElements();
});