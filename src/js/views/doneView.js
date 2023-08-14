import View from "./View.js";
import previewView from "./previewView.js";

class DoneView extends View {
  _parentElement = document.querySelector('.done--container');

  _generateMarkup() {
    return this._data.map(done => previewView.render(done, false)).join('');
  }
};

export default new DoneView();
