import View from './View.js';

class TodoView extends View {
  _parentElement = document.querySelector('.todo--container');
  // _createBtn = document.querySelector('#create__todo--btn');
  _createBtn = document.querySelector('#add-btn');
  _data;
  
  _generateMarkup(data) {
    return `
  <div class='task' draggable='true'>
    <div class='task__tags'>
      <span class='task__tag task__tag--copyright'>${data.tag}</span>
      <button class='task__options'><span class="material-icons-sharp">more_horiz</span></button>
    </div>
    <p>${data.title}</p>
    <div class='task__stats'>
      <!-- TODO: make the flag 12px -->
      <span><time datetime="${data.dueDate}"><span class="material-icons-sharp">flag</span>${data.dueDate.slice(5)}</time></span>
      <span><span class="material-icons-sharp">chat_bubble</span>3</span>
      <span class='task__owner'></span> <!-- add profile picture here -->
    </div>
  </div>
`;
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler); 
  }
}

const addButton = document.getElementById("add-btn");
const todoContainer = document.querySelector(".todo--container");

addButton.addEventListener("click", () => {
    // Create a new todo item with the input fields
    const todoItem = document.createElement("div");
    todoItem.classList.add("task");
    todoItem.setAttribute("draggable", "true");

    const todoTags = createNewTodoTags();

    const todoDescInput = document.createElement("input");
    todoDescInput.type = "text";
    todoDescInput.classList.add("todo-desc-input");
    todoDescInput.placeholder = "Enter your todo description";

    const deadlineDateInput = document.createElement("input");
    deadlineDateInput.type = "date";
    deadlineDateInput.classList.add("deadline-date-input");

    const createTodoBtn = document.createElement("button");
    createTodoBtn.textContent = "Create New Todo";
    createTodoBtn.addEventListener("click", () => {
        const todoDesc = todoDescInput.value;
        const deadlineDate = deadlineDateInput.value;

        // Create the new todo item elements
        const todoDescDisplay = document.createElement("p");
        todoDescDisplay.textContent = todoDesc;

        const deadlineDateDisplay = document.createElement("p");
        deadlineDateDisplay.innerHTML = `<span class="material-icons-sharp">flag</span>${deadlineDate}`;

        const taskStats = document.createElement("div");
        taskStats.classList.add("task__stats");

        const taskStatsContent = document.createElement("span");
        taskStatsContent.innerHTML = `<time datetime="${deadlineDate}"><span class="material-icons-sharp">flag</span>${deadlineDate}</time><span><span class="material-icons-sharp">chat_bubble</span>3</span><span class='task__owner'></span>`;

        taskStats.appendChild(taskStatsContent);

        // Append the new elements to the todo item
        todoItem.appendChild(todoTags);
        todoItem.appendChild(todoDescDisplay);
        todoItem.appendChild(taskStats);

        // Remove the input fields and create button
        todoItem.removeChild(todoDescInput);
        todoItem.removeChild(deadlineDateInput);
        todoItem.removeChild(createTodoBtn);

        // Add the new todo item to the todo container
        todoContainer.appendChild(todoItem);
    });

    // Append the input fields and create button to the todo item
    todoItem.appendChild(todoTags);
    todoItem.appendChild(todoDescInput);
    todoItem.appendChild(deadlineDateInput);
    todoItem.appendChild(createTodoBtn);

    // Add the new todo item to the todo container
    todoContainer.appendChild(todoItem);
});

function createNewTodoTags() {
  const todoTags = document.createElement("div");
  todoTags.classList.add("task__tags");

  const todoTag = document.createElement("span");
  todoTag.classList.add("task__tag", "task__tag--new");
  todoTag.textContent = "New Tag";
  todoTags.appendChild(todoTag);

  const optionsBtn = document.createElement("button");
  optionsBtn.classList.add("task__options");
  optionsBtn.innerHTML = '<span class="material-icons-sharp">more_horiz</span>';
  todoTags.appendChild(optionsBtn);

  return todoTags;
}

export default new TodoView();
