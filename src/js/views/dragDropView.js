class DragDropView {
  _parentElement = document.querySelector('.project-tasks');
  _containers = document.querySelectorAll('.project-column');

  constructor() {
    this.addHandlerDrag();
  }

  addHandlerDrag() {
    this._parentElement.addEventListener('dragstart', e => {
      const dragging = e.target.closest('.draggable');
      dragging.classList.add('dragging');
    });

    this._parentElement.addEventListener('dragend', e => {
      const dragging = e.target.closest('.draggable');
      dragging.classList.remove('dragging');
    });
  }

  addHandlerDragOver(handler) {
    this._containers.forEach(container => {
      container.addEventListener('dragover', (e) => {
        console.log(container);
        e.preventDefault();
      });
      container.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging')
        console.log(container.className.split(' ')[1]);
        const status = container.className.split(' ')[1];
        const id = draggable.id.split('_')[1];
        handler(id, status);
      });
    });
  };

  /* _getDragAfterElement(container, y) {
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

  } */


};

export default new DragDropView();
