import View from './View.js';

class AddTodoView extends View {
  _parentElement = document.querySelector('.todo__list--list');
  _todoBtn = document.querySelector('#create__todo--btn');
  _textBox = document.getElementById('todo-desc');
  _datePicker = document.getElementById('deadline-date');
  _data;

  _clearInput() {
    this._textBox.value = '';
    this._datePicker.value = '';
  }
    
  getTodo() {
    const id = 'id' + new Date().getTime();
    const todoDetails = _textBox.value;
    const deadline = _datePicker.value;
    const todo = { id: id, todoDetails: todoDetails, deadline: deadline };
    this._clearInput();
    return todo;
  }

  addHandlerAddTodo(handler) {
    this._todoBtn.addEventListener('click', function(e) {
      e.preventDefault();
      handler();
    });
  }

  _generateMarkup() {
    
  }
}

export default new AddTodoView();
