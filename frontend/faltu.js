const { isValidElement } = require("react")

//save button padko
const saveBtn=document.getElementById("savebtn")
saveBtn.addEventListener("click",function(){
    const taskName=document.getElementById("task-name").value 
    const taskDesc=document.getElementById("task-desc").value
    const taskDate =document.getElementById("task-date").value 
    const taskTags=document.getElementById("task-tag").value 
    const taskSubtasks=document.getElementById("task-subtask").value
    //yaha tak humne sabki values leli h :)
    if(taskName === ""){
        alert("TYPENAME IS BLANK!")
        //may be i will check whether to use return 
        return//coz abb save nhi krna kuch 

    }
    

    //ek object bnao basically local storage meh save krne ke liye usko
    //stringify kreenge
    //as local storage only saves data in 
    const task = {
        id : Date.now(), //to assign unique id
        name:taskName,
        description : taskDesc,
        dueDate: taskDate,
        tags :taskTags ,
        subtask :taskSubtasks,
        isDone:false
    }
    //now this object is to be saved on local storage
    const stored =localStorage.getItem("tasks")
    //shortcut const tasks =stored ? JSON.parse(stored):[]
    let tasks
    if(stored){
        tasks=JSON.parse(stored)//if stored then array meh convert kr lo
    }
    else{
        tasks=[]//kuch nhi tha kahli array lo
    }
    //step 7
    //tasks is an array of objects task.(where all the details of task are saved)

    tasks.push(task)
    //step 8
    localStorage.setItem("tasks",JSON.stringify(tasks))
    //step 9
    alert("Task Saved !")
    console.log("save tasks:",tasks)
    


    renderTask()    
    document.getElementById("task-name").value=""
    document.getElementById("task-desc").value=""
    document.getElementById("task-date").value=""
    document.getElementById("task-tag").value=""
    document.getElementById("task-subtask").value=""
})

//
//==================fill -task=============================
//
//
//==================Delete -task=============================
//
const deleteBtn=document.getElementById("deletebtn")
deleteBtn.addEventListener("click",function(){
    tasks=tasks.filter(selectedId!==task.id)

})











//making a function to render the list of all tasks
//function declaration is :
//function name (paras){}
let selectedTaskId = null;

function renderTask() {

    const list = document.getElementById("task-list");

    // Purani list clear karo
    list.innerHTML = "";

    // LocalStorage se tasks lao
    const stored = localStorage.getItem("tasks");

    let tasks;

    if (stored) {
        tasks = JSON.parse(stored);
    } else {
        tasks = [];
    }

    // Agar koi task nahi hai
    if (tasks.length === 0) {
        list.innerHTML =
            "<li style='color:#aaa;padding:12px'>NO TASKS</li>";
        return;
    }

    // Har task ke liye ek <li> banao
    tasks.forEach(task => {

        const li = document.createElement("li");

        // Task name dikhao
        li.textContent = task.name;

        // Task select karne par details panel fill karo
        li.addEventListener("click", function () {

            selectedTaskId = task.id;

            document.getElementById("task-name").value =
                task.name;

            document.getElementById("task-desc").value =
                task.description;

            document.getElementById("task-date").value =
                task.dueDate;

            document.getElementById("task-tag").value =
                task.tags;

            document.getElementById("task-subtask").value =
                task.subtasks;
        });

        list.appendChild(li);
    });
}