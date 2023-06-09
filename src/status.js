import tasksList from './data.js';
import updateLocalStorage from './localStorage.js';

const updateStatus = (index, status) => {
  if (status) {
    tasksList[index].completed = true;
  } else {
    tasksList[index].completed = false;
  }
  updateLocalStorage();
};

const checkStatus = (index) => tasksList[index].completed === true;

export { updateStatus, checkStatus };