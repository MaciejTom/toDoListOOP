///////////////////////////////////// TASK CLASS

class Task {
    constructor(contentTask) {
        this.contentTask = contentTask;
        this.date = Date.now().toString();
    }
}

///////////////////////////////////// UI CLASS

class UI {

    static displayTasks() {

        var ref = firebase.database().ref("tasks");
        ref.once("value")
            .then(function (snapshot) {
                snapshot.forEach(el => {
                    declareData(el)
                })
            });

        //    firebase.database().ref("tasks").once('value'), function(snapshot) {
        //        console.log(snapshot)
        //    }



        // const taskList = document.querySelector(".taskList")
        // taskList.appendChild(addTaskToList)
    }
    static addTaskToFirebase(task) {

        firebase.database().ref("tasks/" + task.contentTask).set({
            'taskContent': task.contentTask,
            'id': task.date

        })
        // const taskSpan = document.createElement("span")
        // taskSpan.innerHTML = `
        // ${task.contentTask} <button class=deleteButton>X</button>
        // `
        // return taskSpan
    }
    static deleteTask(el) {

        if (el.classList.contains("deleteButton")) {
            el.parentElement.remove()
        }

    }
}

///////////////////////////////////// EVENT: ADD TASK

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.textContent = ""
    let contentTask = document.querySelector(".input").value

    const task = new Task(contentTask);
    console.log(task)
    UI.addTaskToFirebase(task)
    UI.displayTasks()
    
    displayTasks()
    document.querySelector(".input").value = "";

})

///////////////////////////////////// EVENT: DELETE TASK

document.querySelector(".taskList").addEventListener("click", (e) => {
    UI.deleteTask(e.target)
})






const declareData = function (data) {
    const taskList = document.querySelector(".taskList")

    
   
    let srodekTaska = data.val().taskContent
    console.log(srodekTaska)

    const taskSpan = document.createElement("span")
    // taskSpan.innerHTML = `
    // ${task.contentTask} <button class=deleteButton>X</button>
    // `

    taskSpan.textContent = srodekTaska

    taskList.appendChild(taskSpan)

}
UI.displayTasks()


class ToDoList {
    constructor() {
        this.taskList = document.querySelector(".taskList")
    }
}

const toDoList = new ToDoList()