///////////////////////////////////// TASK CLASS

class Task {
    constructor(contentTask) {
        this.contentTask = contentTask;
        this.date = Date.now().toString();
    }
}

///////////////////////////////////// UI CLASS

class firebaseHandle {

    static displayTasks() {

        var ref = firebase.database().ref("tasks");
        ref.once("value")
            .then(function (snapshot) {
                snapshot.forEach(el => {
                    declareData(el)
                })
            });

       
        return ref
    }
    static addTaskToFirebase(task) {

        firebase.database().ref("tasks/" + task.contentTask).set({
            'taskContent': task.contentTask,           

        })
        
      
    }
    static deleteTask(el) {
        
        if (el.classList.contains("deleteButton")) {
            document.querySelector(".input").value = "";
            console.log(el.parentElement.textContent)
            const taskList = document.querySelector(".taskList") 
            const elSpan = el.parentElement.querySelector("span")
            console.log(elSpan)
            taskList.textContent = "";    
            firebase.database().ref(`tasks/`+ elSpan.textContent).remove()         
            
            UI.displayTasks()
        }

    }
}

///////////////////////////////////// EVENT: ADD TASK

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
     const taskList = document.querySelector(".taskList")
    taskList.textContent = ""
    let contentTask = document.querySelector(".input").value

    const task = new Task(contentTask);
    console.log(task)
    UI.addTaskToFirebase(task)
    UI.displayTasks()
    
   
    document.querySelector(".input").value = "";

})

///////////////////////////////////// EVENT: DELETE TASK

document.querySelector(".taskList").addEventListener("click", (e) => {
    UI.deleteTask(e.target)
})

const declareData = function (data) {
    const taskList = document.querySelector(".taskList")   

    const taskLi = document.createElement("li");
   
    taskLi.innerHTML = `<span>${data.val().taskContent}</span><button class=deleteButton>X</button>`
    
    taskList.appendChild(taskLi)

}
UI.displayTasks()


// class ToDoList {
//     constructor() {

//         this.taskList = document.querySelector(".taskList")
        
//     }

    
// }

// const toDoList = new ToDoList()
