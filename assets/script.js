var formEl = document.querySelector("#task-form"); //form id
var tasksToDoEl = document.querySelector("#tasks-to-do"); // ul id
  
  var createTaskHandler = function (event) { 
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value; //get task name value
    var taskTypeInput = document.querySelector("select[name='task-type']").value; //get option value

    // create list item
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; //css

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info"; // give it a class name

    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl); //made new li
    }; 
  
  formEl.addEventListener("submit", createTaskHandler);