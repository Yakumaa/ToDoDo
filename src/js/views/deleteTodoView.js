// addEventListeners() {
//   const deleteTodoButton = document.querySelectorAll('.task__delete');
//   const deleteCloseBtn = document.querySelectorAll('[data-close-button]');
//   const overlay = document.getElementById('overlay');

//   deleteTodoButton.forEach(button => {
//     button.addEventListener('click', () => {
//       const modal = document.querySelector(button.dataset.modalTarget);
//       openDeleteContainer(modal);
//     })
//   });

//   deleteCloseBtn.forEach(button => {
//     button.addEventListener('click', () => {
//       const modal = button.closest('.delete-confirm__container');
//       closeDeleteContainer(modal);
//     })
//   });

//   overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.delete-confirm__container.active')
//     modals.forEach(modal => {
//       closeDeleteContainer(modal)
//     })
//   })

//   function openDeleteContainer(modal) {
//     if (modal == null) return;
//     modal.classList.add('active');
//     overlay.classList.add('active');
//   }

//   function closeDeleteContainer(modal) {
//     if (modal == null) return;
//     modal.classList.remove('active');
//     overlay.classList.remove('active');
//   }
// }

class DeleteTodoView{

  constructor(handler){
    this.addHandlerDeleteTodo(handler);
  }
  _deleteTodoButton = document.querySelectorAll('.task__delete');

  addHandlerDeleteTodo(handler){
    console.log(this._deleteTodoButton);
    this._deleteTodoButton.forEach(deleteBtn => {
      deleteBtn.addEventListener('click', handler)
    })
  }
}

export default new DeleteTodoView();