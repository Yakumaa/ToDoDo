class EditTodoView {
  _parentElement = document.querySelector('.project');
  _editContainer = document.querySelector('.edit-confirm__container');
  _cancelBtn = document.querySelector('.cancel-edit__btn');
  _closeBtn = document.querySelector('.edit-close-button');
  _confirmEditBtn = document.querySelector('.confirm-edit__btn');
  _overlay = document.getElementById('editOverlay');

  constructor() {
    this._addHandlerHideWindow();
  }

  addHandlerEdit(handler) {
    let editTodoId;
    this._parentElement.addEventListener('click', function(e){ 
      const btn = e.target.closest('.task__edit');
      if (!btn) return;
      editTodoId = (btn.id.split('_')[1]);
      this._toggleConfirmActive();
    }.bind(this)); // use bind or else use an arrow function
    this._confirmEditBtn.addEventListener('click', () => {
      this._toggleConfirmActive();
      handler(editTodoId);
    });
  }

  _addHandlerHideWindow() {
    this._cancelBtn.addEventListener('click', this._toggleConfirmActive.bind(this));
    this._closeBtn.addEventListener('click', this._toggleConfirmActive.bind(this));
    this._overlay.addEventListener('click', this._toggleConfirmActive.bind(this));
  }

  _toggleConfirmActive() {
    this._editContainer.classList.toggle('active');
    this._overlay.classList.toggle('active');
  }

}
export default new EditTodoView();
