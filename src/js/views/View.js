export default class View {
  _data;
  render(data) {
    this._data = data;
    const markup = this._data.map(el => this._generateMarkup(el)).join('');
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
