// selectors
const todoBtn = document.querySelector(".todo-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

// event listleners
todoBtn.addEventListener("click", addTask);
todoList.addEventListener("click", checkOrdelete);

// functions
function addTask(e) {
  e.preventDefault(); // To Prevent The Form From Submiting
  // create li
  const todoLi = document.createElement("li");
  todoLi.classList.add("todo");
  // create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");
  // add input value to div
  todoDiv.innerText = todoInput.value;
  // create button complete
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
  // create button trach
  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash-btn");
  trashBtn.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
  //  add div and button1 + button2
  todoLi.appendChild(todoDiv);
  todoLi.appendChild(completeBtn);
  todoLi.appendChild(trashBtn);
  //  add li to ul
  todoList.appendChild(todoLi);
  // remove input value
  todoInput.value = "";
}
function checkOrdelete(e) {
  const item = e.target;

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    console.log(todo);
    todo.classList.toggle("completed");
  } else if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    console.log(todo);
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
}
