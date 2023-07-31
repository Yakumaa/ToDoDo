"use strict";

const todoContainer = document.querySelector('.todo--container');

let todos = [{
  title: 'ToDoDo',
  dueDate: '10-04-2023',
  id: 'todo1',
  tag: 'Project',
}, {
  title: 'ToDoDo 2',
  dueDate: '10-14-2023',
  id: 'todo2',
  tag: 'Project',

}]

const generateMarkup = function(data) {
  return `
							<div class='task' draggable='true'>
							<div class='task__tags'>
								<span class='task__tag task__tag--copyright'>${data.tag}</span>
								<button class='task__add'><span class="material-icons-sharp">add</span></button>
								<!-- Create new task button-->
								<button class='task__options'><span class="material-icons-sharp">more_horiz</span></button>
							</div>
							<p>${data.title}</p>
							<div class='task__stats'>
								<!-- TODO: make the flag 12px -->
								<span><time datetime="${data.dueDate}"><span class="material-icons-sharp">flag</span>${data.dueDate.slice(0,5)}</time></span>
								<span><span class="material-icons-sharp">chat_bubble</span>3</span>
								<span class='task__owner'></span> <!-- add profile picture here -->
							</div>
						</div>
  `;

}
const showTodo = function() {
  const markup = todos.map(todo => generateMarkup(todo)).join('');
  console.log(markup);
  todoContainer.innerHTML = '';
  todoContainer.insertAdjacentHTML('beforeend', markup);
};

window.addEventListener('load', showTodo);
