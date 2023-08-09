class DeleteTodoView {
  _parentElement = document.querySelector('.project');
  _deleteContainer = document.querySelector('.delete-confirm__container');
  _cancelBtn = document.querySelector('.cancel-delete__btn');
  _closeBtn = document.querySelector('.close-button');
  _confirmDeleteBtn = document.querySelector('.confirm-delete__btn');
  _overlay = document.getElementById('overlay');

  constructor() {
    this._addHandlerHideWindow();
  }

  addHandlerDelete(handler) {
    let delTodoId;
    this._parentElement.addEventListener('click', function(e){ 
      const btn = e.target.closest('.task__delete');
      if (!btn) return;
      delTodoId = (btn.id.split('_')[1]);
      this._toggleConfirmActive();
    }.bind(this)); // use bind or else use an arrow function
    this._confirmDeleteBtn.addEventListener('click', () => {
      this._toggleConfirmActive();
      handler(delTodoId);
    });
  }

  _addHandlerHideWindow() {
    this._cancelBtn.addEventListener('click', this._toggleConfirmActive.bind(this));
    this._closeBtn.addEventListener('click', this._toggleConfirmActive.bind(this));
    this._overlay.addEventListener('click', this._toggleConfirmActive.bind(this));
  }

  _toggleConfirmActive() {
    this._deleteContainer.classList.toggle('active');
    this._overlay.classList.toggle('active');
  }

}
export default new DeleteTodoView();
