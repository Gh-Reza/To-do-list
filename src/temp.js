const taskElement = (data) => {
  const listElement = document.createElement('li');
  listElement.className = 'list-item';
  listElement.innerHTML = `
    <div class="group">
      <input type="checkbox" name="task" id="">
      <label for="task">${data.description}</label>
    </div>
    <div class="move-icon-box">
      <ion-icon class="icon move-icon" name="more"></ion-icon>
    </div>
  `;
  return listElement;
};

export default taskElement;