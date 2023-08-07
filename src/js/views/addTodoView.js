import View from "./View.js";
import previewView from "./previewView.js";

class AddTodoView extends View {
  _parentElement = document.querySelector('.add-todo-container');
  _addTodoButton = document.getElementById("add__todo-btn");
  _underlay = document.querySelector('.underlay');
  _createTodo = document.querySelector('.create__todo-btn');
  _plusBtn = document.querySelector('#todo__plus-btn');
  // _deleteTodoButton = previewView.parentElement.querySelectorAll('[data-modal-target]');
  // _deleteCloseBtn = document.querySelectorAll('[data-close-button]');
  // _overlay = document.getElementById('overlay');

  constructor() {
    super();
    this._addHandlerShowAddTodo();
    this._addEventListeners();
  };

  _clearInput() {
    this._parentElement.querySelector('#todo-desc').value = '';
    this._parentElement.querySelector('#deadline-date').value = '';
  };

  _createCloseBtn() {
    this._plusBtn.innerHTML = '';
    this._plusBtn.innerText = 'close';
    this._plusBtn.classList.remove('add');
    this._plusBtn.style.color = "rgb(248 113 113)";
  }

  _createAddBtn() {
    this._plusBtn.innerHTML = '';
    this._plusBtn.innerText = 'add';
    this._plusBtn.classList.add('add');
    this._plusBtn.style.color = 'var(--light-grey)';
  }

  _toggleAddTodo() {
    this._plusBtn.classList.contains('add') ? this._createCloseBtn() : this._createAddBtn();
    this._underlay.classList.toggle('hidden');

  };

  _addHandlerShowAddTodo() {
    this._addTodoButton.addEventListener('click', this._toggleAddTodo.bind(this));
  }


  getTodo() {
    const title = this._parentElement.querySelector('#todo-desc').value;
    const dueDate = this._parentElement.querySelector('#deadline-date').value;

    this._clearInput();
    this._toggleAddTodo();
    if (!title) return;
    console.log(title, dueDate);
    return {
      title: title,
      dueDate: dueDate,
      id: 'id' + new Date().getTime(),
      tag: 'Practice',
    }
  }

  addHandlerClick(handler) {
    this._createTodo.addEventListener('click', handler);
  }

  _addEventListeners() {
    const deleteTodoButton = document.querySelectorAll('[data-modal-target]');
    const deleteCloseBtn = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');

    deleteTodoButton.forEach(button => {
      button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openDeleteContainer(modal);
      })
    });

    deleteCloseBtn.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.delete-confirm__container');
        closeDeleteContainer(modal);
      })
    });

    overlay.addEventListener('click', () => {
      const modals = document.querySelectorAll('.delete-confirm__container.active')
      modals.forEach(modal => {
        closeDeleteContainer(modal)
      })
    })

    function openDeleteContainer(modal) {
      if (modal == null) return;
      modal.classList.add('active');
      overlay.classList.add('active');
    }

    function closeDeleteContainer(modal) {
      if (modal == null) return;
      modal.classList.remove('active');
      overlay.classList.remove('active');
    }
  }
};

// // const deleteTodoButton= previewView.parentElement.querySelectorAll('[data-modal-target]')
// const deleteTodoButton= previewView.getDeleteButtonElement();
// const deleteCloseBtn= document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// deleteTodoButton.forEach(button => {
//   button.addEventListener( 'click' , () => {
//     // const modal = document.querySelector(button.dataset.modalTarget);
//     // console.log(modalTarget);
//     const modalTarget = deleteTodoButton.dataset.modalTarget;
//     console.log(modalTarget); // Outputs "#delete__container"
//     openDeleteContainer(modal);
//   })
// })

// deleteCloseBtn.forEach(button => {
//   button.addEventListener( 'click' , () => {
//     const modal =button.closest('delete-confirm__container')
//     closeDeleteContainer(modal)
//   })
// })

// function openDeleteContainer(modal){
//   if(modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeDeleteContainer(modal){
//   if(modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }

export default new AddTodoView();
