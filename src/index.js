import './style.css';
import displayElements from './display.js';
import taskManager from './taskManager.js';

displayElements();

// * Add functionality

const inputElement = document.querySelector('.addInput');

inputElement.addEventListener('keydown', (e) => {
  if ((e.keyCode !== 13 || e.key !== 'Enter') || inputElement.value === '') return;
  taskManager.addTask(inputElement.value);
  inputElement.value = '';
  displayElements();
});

const enterIconElement = document.querySelector('.enter-icon');

enterIconElement.addEventListener('click', () => {
  if (inputElement.value === '') { return; }
  taskManager.addTask(inputElement.value);
  displayElements();
  inputElement.value = '';
});