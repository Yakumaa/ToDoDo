"use strict";
import * as model from './model.js'
import todoView from './views/todoView.js';
import addTodoView from './views/addTodoView.js';

const controlShowTodo = function() {
  todoView.render(model.todos); 
};

const controlAddTodo = function() {
  const todo = addTodoView.getTodo() 
  model.todos.push(todo);
  todoView.render(model.todos);
};

const init = function() {
  todoView.addHandlerRender(controlShowTodo);
  addTodoView.addHandlerClick(controlAddTodo); 
}
init();
