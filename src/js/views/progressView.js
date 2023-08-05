import View from "./View.js";
import previewView from "./previewView.js";

class ProgressView extends View {
  _parentElement = document.querySelector('.progress--container');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(progress => previewView.render(progress, false));
  }
};

export default new ProgressView();
