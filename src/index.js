import './style.css';
import DisplayElements from './display.js';
import taskManager from './taskManager.js';

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