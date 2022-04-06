var formEl = document.querySelector("#task-form"); //form id
var tasksToDoEl = document.querySelector("#tasks-to-do"); // ul id
  
  var createTaskHandler = function() { 

    event.preventDefault();
    
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; //css
    listItemEl.textContent = "This is a new task."; 
    tasksToDoEl.appendChild(listItemEl); //made new li
    }; 
  
  formEl.addEventListener("submit", createTaskHandler);