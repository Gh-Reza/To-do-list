import tasksList from './data.js';

const updateLocalStorage = () => {
  localStorage.setItem('todotask', JSON.stringify(tasksList));
};

export default updateLocalStorage;