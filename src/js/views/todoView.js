import View from './View.js';
import previewView from './previewView.js';

class TodoView extends View {
  _parentElement = document.querySelector('.todo--container');
  _generateMarkup(){
    return this._data.map(todo => previewView.render(todo, false));
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler); 
  }
}

export default new TodoView();
