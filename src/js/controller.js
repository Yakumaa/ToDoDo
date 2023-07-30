const createBtn = document.getElementById('create__todo--btn');
const todoList =  document.querySelector('.todo-list__list');
console.log(createBtn);
let todos = [{
  todo: 'ToDoDo',
  deadline: '2023-11-04',
  id: 'id1'
}];
const createToDo = function() {
  const id = 'id' + new Date().getTime();
  const textBox = document.getElementById('todo-desc');
  const todoDetails = textBox.value;
  if(!todoDetails) return;

  const datePicker = document.getElementById('deadline-date');
  const deadline = datePicker.value;
  console.log(deadline);

  todos.push({
    todo: todoDetails,
    deadline: deadline,
    id: id,
  });
  render();
}

const clearTodoList = function() {
  todoList.innerHTML = '';
  console.log(todoList);
}
  
const render = function() {
  clearTodoList();
  console.log(todos);
  todos.forEach(todo => {
    console.log(todo);
    const newTodo = document.createElement('li');
    newTodo.innerText = todo.todo + ' ' + todo.deadline;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    newTodo.appendChild(deleteButton);
    
    todoList.appendChild(newTodo);
  });
}

render();
createBtn.addEventListener('click', createToDo);
