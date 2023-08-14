import View from "./View.js";
import previewView from "./previewView.js";

class ProgressView extends View {
  _parentElement = document.querySelector('.progress--container');

  _generateMarkup() {
    return this._data.map(progress => previewView.render(progress, false)).join('');
  }
};

export default new ProgressView();
