// To Do App
// List - to show all todos 
// add - to add a todos
// delete - to delete a task
// quit - to exit the todo 

// Array 
let todo =[];

// user input
let req =prompt("please enter your request");

while (true) {
    if(req == "quit") {
        console.log("quitting app ");
        break;
    }
    if(req == "list"){
        console.log("_________________");
        // for(task of todo){
        //     console.log(task);  
        // }
        for(let i = 0; i<todo.length; i++){
            console.log(i,todo[i]);       
        }
        console.log("_________________");
    } else if(req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
 
    } else if( req =="delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("task deleted"); 
    } else {
        console.log("wrong request");
    }
    req=prompt("please enter your request");
}