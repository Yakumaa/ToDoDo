"use strict";
import * as model from './model.js'
import todoView from './views/todoView.js';
import addTodoView from './views/addTodoView.js';
import progressView from './views/progressView.js';
import doneView from './views/doneView.js';

const controlShowTodo = function() {
  const todoTasks = model.todos.filter(el => el.status === 'todo');
  const progressTasks = model.todos.filter(el => el.status === 'progress');
  const doneTasks = model.todos.filter(el => el.status === 'done');
  console.log(todoTasks);
  todoView.render(todoTasks); 
  progressView.render(progressTasks);
  doneView.render(doneTasks);
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
