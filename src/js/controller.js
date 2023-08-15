"use strict";
import { catTodos } from './helpers.js';
import * as model from './model.js'
import todoView from './views/todoView.js';
import addTodoView from './views/addTodoView.js';
import previewView from './views/previewView.js';
import progressView from './views/progressView.js';
import doneView from './views/doneView.js';
import deleteTodoView from './views/deleteTodoView.js';
import dragDropView from './views/dragDropView.js';
import editTodoView from './views/editTodoView.js';

const controlShowTodo = function() {
  const todos = catTodos();
  todoView.render(todos.todo);
  progressView.render(todos.progress);
  doneView.render(todos.done);
};

const controlAddTodo = function() {
  const todo = addTodoView.getTodo()
  model.todos.splice(0, 0, todo);
  controlShowTodo();
};

const controlDeleteTodo = function(id) {
  // console.log('hi');
  // console.log(id);
  // finding the index of the id in model
  const indexToDel = model.todos.findIndex(todo => todo.id === id);
  // if index exists del -1 when index doesn't exist
  if (indexToDel !== -1) {
    model.todos.splice(indexToDel, 1);
  }
  controlShowTodo();
}

const controlDragDrop = function(id, status) {
  const changeTodo = model.todos.findIndex(todo => todo.id === id);
  model.todos[changeTodo].status = status;
  controlShowTodo();
};

const controlEditTodo = function(id, newTitle, newDate){ // console.log(id)
  // const editTitle = model.todos.title;
  // console.log(editTitle);
  // const indexToEdit = model.todos.find(todo => todo.id === id);

  // if(indexToEdit){
  //   // console.log(indexToEdit.title);
  //   const editTitleInput = document.querySelector('.edit-title-input');
  //   editTitleInput.textContent = indexToEdit.title;
  // }
  const todoToEdit = model.todos.find(todo => todo.id === id);
  if (todoToEdit) {
    todoToEdit.title = newTitle;
    todoToEdit.dueDate = newDate;
  }
  controlShowTodo();
}

const init = function() {
  previewView.addHandlerRender(controlShowTodo);
  addTodoView.addHandlerClick(controlAddTodo);
  deleteTodoView.addHandlerDelete(controlDeleteTodo);
  dragDropView.addHandlerDragOver(controlDragDrop);
  editTodoView.addHandlerEdit(controlEditTodo);
}

init();
