import View from './View.js';

class TodoView extends View {
  _parentElement = document.querySelector('.todo--container');
  _data;
  
  _generateMarkup(data) {
    return `
  <div class='task' draggable='true'>
    <div class='task__tags'>
      <span class='task__tag task__tag--copyright'>${data.tag}</span>
      <button class='task__options'><span class="material-icons-sharp">more_horiz</span></button>
    </div>
    <p>${data.title}</p>
    <div class='task__stats'>
      <!-- TODO: make the flag 12px -->
      <span><time datetime="${data.dueDate}"><span class="material-icons-sharp">flag</span>${data.dueDate.slice(5)}</time></span>
      <span><span class="material-icons-sharp">chat_bubble</span>3</span>
      <span class='task__owner'></span> <!-- add profile picture here -->
    </div>
  </div>
`;
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler); 
  }
}

export default new TodoView();
