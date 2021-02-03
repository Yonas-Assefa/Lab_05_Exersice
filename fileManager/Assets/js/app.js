// Define UI Variables 

const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

//the reload button at the top right of navigation
const reloadIcon = document.querySelector('.fa'); 

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);

//   Filter Task 
filter.addEventListener('keypress', compare);

// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

  




function addNewTask(e) {
    if (taskInput.value == '') 
    {
       taskInput.style.borderColor = "red";
       return;
    }
    else{
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
    }

  

  e.preventDefault(); //disable form submission
}



// Clear Task Function definition 
function clearAllTasks() {

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }


}

var searchWord;

// Filter tasks function definition 
function filterTasks(e) {

    //console.log("Task Filter ...");
   // console.log(e.target.value);
     searchWord=e.target.value;
    
    tasksList=document.querySelectorAll('.collection-item');
    //console.log(tasksList);
    // // console.log(tasksList[1].innerText);
   

}

function compare(e){
    if(e.key==='Enter'){
        //console.log(searchWord)
        tasksList.forEach(compare1);
        function compare1(item){
        let itemValue=item.innerText;
        console.log(item)
        if(itemValue==searchWord){
            item.style.display='block'

        }
        else{item.style.display='none';
        
    }
        
    }
    }
}
 


// Remove Task function definition 
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }

}


// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}

