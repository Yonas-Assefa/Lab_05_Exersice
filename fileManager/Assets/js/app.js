// Define UI Variables 

const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);


// Add New  Task Function definition 
// function addNewTask(e) {

//     alert("Add New Task ....");

//     e.preventDefault(); //disable form submission
// }

// Add New  Task Function definition 
function addNewTask(e) {

  // Create an li element when the user adds a task 
  const li = document.createElement('li');
  // Adding a class
  li.className = 'collection-item';
  // Create text node and append it 
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new element for the link 
  const link = document.createElement('a');
  // Add class and the x marker for a 
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);
  // Append to ul 
  taskList.appendChild(li);

  e.preventDefault(); //disable form submission
}


// Clear Task Function definition 
function clearAllTasks() {

    alert("Clear tasks ....");

}
// Filter tasks function definition 
function filterTasks(e) {

    console.log("Task Filter ...");

}
