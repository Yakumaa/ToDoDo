import View from "./View.js";

class AddTodoView extends View {
  _parentElement = document.querySelector('.input__container');

  _clearInput() {
    this._parentElement.querySelector('#todo-desc').value = '';
    this._parentElement.querySelector('#deadline-date').value = '';
  };

  getTodo() {
    const title = this._parentElement.querySelector('#todo-desc').value;
    const dueDate = this._parentElement.querySelector('#deadline-date').value;
    console.log(dueDate);

    this._clearInput();

    if (!title) return;

    return {
      title: title,
      dueDate: dueDate,  
      id: 'id' + new Date().getTime(),
      tag: 'Practice', 
    }
  }

  addHandlerClick(handler) {
    // this._parentElement.querySelector('#create__todo--btn').addEventListener('click', handler);
    this._parentElement.querySelector('#add-btn').addEventListener('click', handler);
  }
};

export default new AddTodoView();
