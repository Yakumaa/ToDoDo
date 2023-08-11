class DragDropView {
  _parentElement = document.querySelector('.project-tasks');
  _containers = document.querySelectorAll('.containers');


  constructor() {
    this.addHandlerDragOver();
  }

  printItem() {
    console.log(this._containers);
  }
  addHandlerDrag() {
    this._parentElement.addEventListener('dragstart', e => {
      const dragging = e.target.closest('.draggable');
      dragging.classList.add('dragging');
      console.log(dragging);
    });

    this._parentElement.addEventListener('dragend', e => {
      const dragging = e.target.closest('.draggable');
      dragging.classList.remove('dragging');
      console.log(dragging);
    });
  }

  addHandlerDragOver() {
    this._containers.forEach(container => {
      container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = this._getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
          container.appendChild(draggable)
        } else {
          container.insertBefore(draggable, afterElement)
        }
      });
    });
  }

  _getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element

  }


};

export default new DragDropView();
