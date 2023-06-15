const updateLocalStorage = (tasksList) => {
  localStorage.setItem('todotask', JSON.stringify(tasksList));
};

export default updateLocalStorage;