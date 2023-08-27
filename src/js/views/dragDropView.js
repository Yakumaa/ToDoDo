class DragDropView {
  _parentElement = document.querySelector('.project-tasks');
  _containers = document.querySelectorAll('.project-column');

  constructor() {
    this.addHandlerDrag();
  }

  addHandlerDrag() {
    this._parentElement.addEventListener('dragstart', (e) => {
      const dragging = e.target.closest('.draggable');
      dragging.classList.add('dragging');
    });
    this._parentElement.addEventListener('dragend', (e) => {
      const dragging = e.target.closest('.draggable');
      dragging.classList.remove('dragging');
    });
  }

  addHandlerDragOver(handler) {
    this._containers.forEach(container => {
      // need this to listen for drop
      container.addEventListener('drop', function() {
        const draggable = document.querySelector('.dragging')
        const status = container.className.split(' ')[1];
        const id = draggable.id.split('_')[1];
        handler(id, status);
      });

      container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = this._getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
          // container.appendChild(draggable)
          container.getElementsByClassName("containers")[0].appendChild(draggable);
        } else {
          // container.insertBefore(draggable, afterElement)
          container.getElementsByClassName("containers")[0].insertBefore(draggable, afterElement);
          }
      })
    });
  };

  _getDragAfterElement = function(container, y) {
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
