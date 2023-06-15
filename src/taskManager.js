import updateLocalStorage from './localStorage.js';

const taskManager = {
  addTask: (description, tasksList) => {
    tasksList.push({
      description,
      completed: false,
      index: tasksList.length + 1,
    });
    updateLocalStorage(tasksList);
  },

  removeTask: (index, tasksList) => {
    tasksList.splice(index, 1);

    for (let i = index; i < tasksList.length; i += 1) {
      tasksList[i].index = i + 1;
    }
    updateLocalStorage(tasksList);
  },

  updateTask: (newValue, index, tasksList) => {
    tasksList[index] = {
      description: newValue,
      completed: tasksList[index].completed,
      index: tasksList[index].index,
    };
    updateLocalStorage(tasksList);
  },

  clearCompleted(tasksList) {
    const temArr = tasksList.filter((task) => !task.completed);
    tasksList.splice(0);
    temArr.forEach((elem) => {
      tasksList.push(elem);
    });
    for (let i = 0; i < tasksList.length; i += 1) {
      tasksList[i].index = i + 1;
    }
    updateLocalStorage(tasksList);
  },
};

export default taskManager;