///////////////////////////////////// TASK CLASS

class Task {
    constructor(contentTask) {
        this.contentTask = contentTask;
    }
}

///////////////////////////////////// UI CLASS

class UI {
    static displayTasks(addTaskToList) {
        const taskList = document.querySelector(".taskList")
        taskList.appendChild(addTaskToList)
    }
    static addTaskToList(task) {
        
        const taskSpan = document.createElement("span")
        taskSpan.innerHTML = `
        ${task.contentTask} <button class=deleteButton>X</button>
        `
        return taskSpan
    }
}

///////////////////////////////////// EVENT: ADD TASK

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
   
    const contentTask = document.querySelector(".input").value
   
    const task = new Task(contentTask);

   
    UI.displayTasks(UI.addTaskToList(task))
    
})