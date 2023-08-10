class DragDropView {  
  _parentElement = document.querySelector('.project-tasks');
  _containers = document.querySelectorAll('.containers');

  printItem() {
    console.log(this._containers);
  }
  addHandlerDrag() {
    this._parentElement.addEventListener('dragstart', e => {
      const dragging = e.target.closest('.draggable');
      console.log(dragging);
    });
  }
};

export default new DragDropView();
