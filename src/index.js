import './style.css';
import DisplayElements from './display.js';
import taskManager from './taskManager.js';

const ob = new DisplayElements();

document.addEventListener('DOMContentLoaded', () => {
  const tasksList = JSON.parse(localStorage.getItem('todotask')) || [];
  ob.displayElements(tasksList);
});

// * Add functionality

const inputElement = document.querySelector('.addInput');

inputElement.addEventListener('keydown', (e) => {
  const tasksList = JSON.parse(localStorage.getItem('todotask')) || [];
  if ((e.keyCode !== 13 || e.key !== 'Enter') || inputElement.value === '') return;
  taskManager.addTask(inputElement.value, tasksList);
  inputElement.value = '';
  ob.displayElements(tasksList);
});

const enterIconElement = document.querySelector('.enter-icon');

enterIconElement.addEventListener('click', () => {
  const tasksList = JSON.parse(localStorage.getItem('todotask')) || [];
  if (inputElement.value === '') { return; }
  taskManager.addTask(inputElement.value, tasksList);
  ob.displayElements(tasksList);
  inputElement.value = '';
});

// * Delete all checkec

const clearChecked = document.querySelector('.removeBtn');

clearChecked.addEventListener('click', () => {
  const tasksList = JSON.parse(localStorage.getItem('todotask')) || [];
  taskManager.clearCompleted(tasksList);
  ob.displayElements(tasksList);
});