class DragDropView {
  _parentElement = document.querySelector('.project-tasks');
  _containers = document.querySelectorAll('.project-column');

  constructor() {
    this.addHandlerDrag();
  }

  _toggleDragging(e) {
    const dragging = e.target.closest('.draggable');
    dragging.classList.toggle('dragging');
  };

  addHandlerDrag() {
    this._parentElement.addEventListener('dragstart', (e) => this._toggleDragging(e));
    this._parentElement.addEventListener('dragend', (e) => this._toggleDragging(e));
  }

  addHandlerDragOver(handler) {
    this._containers.forEach(container => {
      // need this to listen for drop
      container.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      container.addEventListener('drop',  function() {
        const draggable = document.querySelector('.dragging')
        const status = container.className.split(' ')[1];
        const id = draggable.id.split('_')[1];
        handler(id, status);
      });
    });
  };
};

export default new DragDropView();
