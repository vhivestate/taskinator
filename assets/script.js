var formEl = document.querySelector("#task-form"); //form id
var tasksToDoEl = document.querySelector("#tasks-to-do"); // ul id
  
  var taskFormHandler = function (event) { 
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value; //get task name value
    var taskTypeInput = document.querySelector("select[name='task-type']").value; //get option value
   
    // check if input values are empty strings
if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }
  formEl.reset();

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    }; 

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

    var createTaskEl = function(taskDataObj) {
// create list item
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
taskInfoEl.className = "task-info"; // class name
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>"; //add html content to div
listItemEl.appendChild(taskInfoEl);

// add entire list item to list
tasksToDoEl.appendChild(listItemEl);
    }

  formEl.addEventListener("submit", taskFormHandler);