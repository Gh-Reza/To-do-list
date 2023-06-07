import tasksList from "./data.js";

const updateLocalStorage = () => {
  localStorage.setItem('todotask', JSON.stringify(tasksList));
}

const tastManager = {
  addTask: (description) => {
    tasksList.push({
      description: description,
      completed: false,
      index: tasksList.length + 1
    })
    updateLocalStorage();
  },
}

export default tastManager;