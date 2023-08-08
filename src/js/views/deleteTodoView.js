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
      // console.log(e);
      const btn = e.target.closest('.task__delete');
      if (!btn) return;
      delTodoId = (btn.id.split('_')[1]);
      // console.log(this)
      this.toggleConfirmActive();
    }.bind(this)); // use bind or else use an arrow function
    this._confirmDeleteBtn.addEventListener('click', () => {
      this.toggleConfirmActive();
      handler(delTodoId);
    });
  }

  _addHandlerHideWindow() {
    this._cancelBtn.addEventListener('click', this.toggleConfirmActive.bind(this));
    this._closeBtn.addEventListener('click', this.toggleConfirmActive.bind(this));
    this._overlay.addEventListener('click', this.toggleConfirmActive.bind(this));
  }

  toggleConfirmActive() {
    this._deleteContainer.classList.toggle('active');
    this._overlay.classList.toggle('active');
  }

}
export default new DeleteTodoView();
