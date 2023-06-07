import tasksList from "./data.js";
import taskElement from "./temp.js";
const elementContainer = document.querySelector('.list-box');
const displayElements = () => {
  tasksList.forEach((task) => {
    elementContainer.appendChild(taskElement(task));
  });
}

export default displayElements;