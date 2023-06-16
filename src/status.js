import updateLocalStorage from './localStorage.js';

const updateStatus = (index, status, tasksList) => {
  if (status) {
    tasksList[index].completed = true;
  } else {
    tasksList[index].completed = false;
  }
  updateLocalStorage(tasksList);
};

export default updateStatus;