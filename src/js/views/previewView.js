import View from "./View.js";

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    return `
  <div class='task draggable' id='task_${this._data.id}' draggable='true'>
    <div class='task__tags'>
      <span class='task__tag task__tag--copyright'>${this._data.tag}</span>
      <!-- <button class='task__options'><span class="material-icons-sharp">more_horiz</span></button> -->
    </div>
    <p>${this._data.title}</p>
    <div class='task__stats'>
      <!-- TODO: make the flag 12px -->
      <div class='flag-note-owner__container'>
        <span><time datetime="${this._data.dueDate}"><span class="material-icons-sharp">flag</span>${this._data.dueDate.slice(5)}</time></span>
        <span><span class="material-icons-sharp">chat_bubble</span>3</span>
        <span class='task__owner'></span> <!-- add profile picture here -->
      </div>
      
      <div class='edit-delete__container'>
        <button class='task__edit'><span class="material-icons-sharp">edit</span></button>
        <button class='task__delete' id="delete-button_${this._data.id}"><span class="material-icons-sharp">delete</span></button>
      </div>
    </div>
  </div>
`;
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler); 
  }
}

export default new PreviewView();
