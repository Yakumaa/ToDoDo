export default class View {
  _data;
  render(data, render=true) {
    // console.log(this);
    this._data = data;
    const markup = this._generateMarkup();
    if(!render) return markup;
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
