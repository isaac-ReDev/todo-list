const inputTask = document.querySelector("#input-task");  
const btnCreateTask = document.querySelector("#create-task");
const ulTodoList   = document.querySelector("[data-id='todo-list']")
const todoList = [];

//* build task object function
function  buildTask(txt){
    const newTask = {
        task: txt,
        todo: true,
        index: todoList.length
    };
    return newTask;
}

function ShowTasks(){
    ulTodoList.innerHTML = ''
    for (let i=0; i<todoList.length; i++) {
        ulTodoList.innerHTML += `
            <li id="${i}" class="task">
                <span class="row-txt">${todoList[i].task}</span> 
                <button class="btn-delete">Delete</button>
            </li>
        `        
        // ulTodoList.innerHTML += `
        //     <li id="${i}" class="task">
        //         <span>${todoList[i].index}</span>
        //         <span>${todoList[i].task}</span> 
        //         TODO<span>${todoList[i].todo}</span>
        //         <button class="tbn-delete">Delete</button>
        //     </li>
        // `        
    }
}
ShowTasks()

btnCreateTask.addEventListener("click", ()=>{
    console.log(inputTask.value)
    todoList.push(buildTask(inputTask.value))
    ShowTasks()
    inputTask.value = '';
})

document.addEventListener("click", (e)=>{
    const targetEl = e.target;
    const parentEl = targetEl.parentElement
    const indexEl = parentEl.id    
    if(targetEl.classList.contains("btn-delete")){
        parentEl.remove()
        todoList.splice(indexEl,1);        
        todoList.forEach(e => {
            console.log(e);
        });        
    }

})
