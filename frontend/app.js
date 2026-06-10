//save button padko
const saveBtn=document.getElementById("savebtn")
savebtn.addEventListener("click",function(){
    const taskName=document.getElementById("task-name").value 
    const taskDesc=document.getElementById("task-desc").value
    const taskDate =document.getElementById("task-date").value 
    const taskTags=document.getElementById("task-tag").value 
    const taskSubtasks=document.getElementById("task-subtask").value
    //yaha tak humne sabki values leli h :)
    if(taskName === ""){
        alert("TYPENAME IS BLANK!")
        //may be i will check whether to use return 

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


})