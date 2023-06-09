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

export default updateStatus;