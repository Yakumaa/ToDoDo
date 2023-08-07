import * as model from './model.js';

export const catTodos = function() {
  const todoTasks = model.todos.filter(el => el.status === 'todo');
  const progressTasks = model.todos.filter(el => el.status === 'progress');
  const doneTasks = model.todos.filter(el => el.status === 'done');
  return {todo: todoTasks, progress: progressTasks, done: doneTasks};
}
