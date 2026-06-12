

const saveBtn=document.getElementById("savebtn")
function removeContent(){
    document.getElementById("task-name").value =""
    document.getElementById("task-desc").value =""
    document.getElementById("task-date").value =""
    document.getElementById("task-tag").value =""
    document.getElementById("task-subtask").value =""
}
//
//================SAVE BUTTON=================
//
saveBtn.addEventListener("click",function(){
    const taskName=document.getElementById("task-name").value 
    const taskDesc=document.getElementById("task-desc").value
    const taskDate=document.getElementById("task-date").value
    const taskTags=document.getElementById("task-tag").value
    const takeSubtasks=document.getElementById("task-subtask").value
    const task={
        id:Date.now(),
        name : taskName,
        description : taskDesc,
        dueDate : taskDate,
        tags : taskTags,
        subTasks : takeSubtasks,
        isDone : false

    }
    const stored=localStorage.getItem("tasks")
    let tasks
    if(stored){
        tasks=JSON.parse(stored)

    }
    else {
        tasks=[]
    }
    tasks.push(task)
    localStorage.setItem("tasks",JSON.stringify(tasks))
    alert("saved!")

    rendertask()
    removeContent()
})
//
//================upDATE LIST================
//
//now render list 
let selectedTaskID= null;
function rendertask(){
    //so object lo
    //storage se data load kroo
    const list=document.getElementById("task-list")
    list.innerHTML=""
    const stored=localStorage.getItem("tasks")
    let tasks
    if(stored){
        tasks=JSON.parse(stored)
    }
    else{
        tasks=[]
    }
    if(tasks.length===0){
        list.innerHTML="<li style='color:#aaa;padding:12px'>NO TASKS</li>"
        return
    }
    //now we have list we have an object to list
    tasks.forEach(task => {
        const li=document.createElement("li")//har element ke liye ek li element create kro 
        //task ko contenr name do task.name

        li.textContent=task.name
        //task select karne pr details fill
        li.addEventListener("click",function(){
            selectedTaskID=task.id;
            document.getElementById("task-name").value=task.name;
            document.getElementById("task-desc").value=task.description;
            document.getElementById("task-date").value=task.dueDate;
            document.getElementById("task-tag").value=task.tags;
            document.getElementById("task-subtask").value=task.subTasks;

        });
        list.appendChild(li);
    });
}   
rendertask()


//
//================MAIN BUTTON=================
//
const mainButton=document.getElementById("main-button")
mainButton.addEventListener("click",function(){
    removeContent()

});
//
//================DELETE BUTTON=================
//
const deleteButton=document.getElementById("deletebtn")
deleteButton.addEventListener("click",function(){
    const stored=localStorage.getItem("tasks")
    let tasks
    if(stored){
        tasks=JSON.parse(stored)
    }
    else{
        alert("no such task found!")
        return
    }
    if(selectedTaskID !==null){
        tasks=tasks.filter(task=>task.id!==selectedTaskID)
    }
    //update in local storage:
    localStorage.setItem("tasks",JSON.stringify(tasks))
    alert("deleted succesfully")
    removeContent()
    rendertask()
});

//
//================SUBTASK BUTTON=================
//
const subtaskBtn=document.getElementById("task-subtask")
subtaskBtn.addEventListener("click",function(){

});