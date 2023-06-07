import './style.css';
import displayElements from './display.js';
import taskManager from './taskManager.js';
import tasksList from './data.js';

displayElements();

// * Add functionality

const inputElement = document.querySelector('.addInput');

inputElement.addEventListener('keydown', (e) => {
  if(e.keyCode === 13 || e.key === 'Enter') {
    taskManager.addTask(inputElement.value);
    displayElements();
    inputElement.value = '';
  }
})