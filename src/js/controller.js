import * as model from './model.js';

import addTodoView from './todoView.js';

const createBtn = document.getElementById('create__todo--btn');
const todoList =  document.querySelector('.todo-list__list');

const controlAddTodo = function() {
  const todo = addTodoView.getTodo();

  if(!todo) return;

  model.todos.push({
    todo: todo.todoDetails,
    deadline: todo.deadline,
    id: todo.id,
    status: 'todo',
  });
  addTodoView.render(model.todos);
}

const init = function() {
  addTodoView.addHandlerAddTodo(controlAddTodo);
};
init();
