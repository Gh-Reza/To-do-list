import tasksList from './data.js';
import updateLocalStorage from './localStorage.js';

const taskManager = {
  addTask: (description) => {
    tasksList.push({
      description,
      completed: false,
      index: tasksList.length + 1,
    });
    updateLocalStorage();
  },

  removeTask: (index) => {
    tasksList.splice(index, 1);

    for (let i = index; i < tasksList.length; i += 1) {
      tasksList[i].index = i + 1;
    }
    updateLocalStorage();
  },

  updateTask: (newValue, index) => {
    tasksList[index] = {
      description: newValue,
      completed: tasksList[index].completed,
      index: tasksList[index].index,
    };
    updateLocalStorage();
  },
};

export default taskManager;