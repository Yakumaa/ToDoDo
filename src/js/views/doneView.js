import View from "./View.js";
import previewView from "./previewView.js";

class DoneView extends View {
  _parentElement = document.querySelector('.done--container');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(done => previewView.render(done, false));
  }
};

export default new DoneView();
