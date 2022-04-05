var buttonEl = document.querySelector("#save-task"); //button id
var tasksToDoEl = document.querySelector("#tasks-to-do"); // ul id
  
  var createTaskHandler = function() { 
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; //css
    listItemEl.textContent = "This is a new task."; 
    tasksToDoEl.appendChild(listItemEl); //made new li
    }; 
  
  buttonEl.addEventListener("click", createTaskHandler);