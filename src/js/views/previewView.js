import View from "./View.js";

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    return `
  <div class='task draggable' id='task_${this._data.id}' draggable='true'>
    <div class='task__tags'>
      <span class='task__tag task__tag--copyright'>${this._data.tag}</span>
    </div>
    <p>${this._data.title}</p>
    <div class='task__stats'>
      <!-- TODO: make the flag 12px -->
      <div class='flag-note-owner__container'>
        <span><time datetime="${this._data.dueDate}"><span><svg><use href="src/img/icons.svg#icon-flag"></use></svg></span>${new Date(this._data.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time></span>
        <span><span><svg><use href="src/img/icons.svg#icon-chat_bubble"></use></svg></span>3</span>
        <!-- <span class='task__owner'></span> <!-- add profile picture here --> 
      </div>
      
      <div class='edit-delete__container'>
        <button class='task__edit' id="edit-button_${this._data.id}"><span><svg><use href="src/img/icons.svg#icon-edit"></use></svg></span></button>
        <button class='task__delete' id="delete-button_${this._data.id}"><span><svg><use href="src/img/icons.svg#icon-delete"></use></svg></span></button>
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
