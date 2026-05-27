import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    // let [todos , setTodos] = useState(["Sample Task"]);

    // new unique id 
      let [todos , setTodos] = useState([{task:"Sample Task", id:uuidv4() , isDone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
     setTodos((prevTodos) => {
        return [...prevTodos,{task:newTodo,id:uuidv4(),isDone: false   }];
     });

        // setTodos([...todos, todoObj]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) =>{
        // console.log("task is deleted");
        // console.log(id);
        setTodos((prevTodos) =>todos.filter((todo ) =>todo.id !==id));
        // console.log(copy);
        
    };


    let upperCaseAll = () =>{
       setTodos((prevTodos)=>{ 
        return prevTodos.map((todo)=>{
            return{
                ...todo,
                task: todo.task.toUpperCase(),
                };
            });
        });
    };

    let MarkDoneAll = () =>{
       setTodos((prevTodos)=>{ 
        return prevTodos.map((todo)=>{
            return{
                ...todo,
                isDone:true
                };
            });
        });
    };


    let MarkAsDone = (id) =>{
         setTodos((prevTodos)=>{ 
           return prevTodos.map((todo)=>{
                if(todo.id === id){
                return{
                    ...todo,
                    isDone:true
                    // task: todo.task.toUpperCase(),
                };
                } else {
                    return todo;
                }
            });
        });
    };
    let UpperCaseOne = (id) =>{
         setTodos((prevTodos)=>{ 
           return prevTodos.map((todo)=>{
                if(todo.id === id){
                return{
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
                } else {
                    return todo;
                }
            });
        });
    };
    return(
        <div>
            <input 
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <br /><br />

            <button onClick={addNewTask}>Add Task</button>

            <br /><br /><br /><br />
            <hr />

            <h4>Tasks Todo</h4>

            <ul>
                {todos.map((todo) => {
                    return <li key={todo.id}>
                            <span style={todo.isDone ? { textDecorationLine:"line-through"}:{}}>
                              {todo.task}
                            </span>
                            &nbsp;
                            &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>
                                 Delete
                            </button>
                            <button onClick={()=>UpperCaseOne(todo.id)}> Upper Case One </button>
                            <button onClick={()=>MarkAsDone(todo.id)}> Mark As Done</button>

                            </li>;
               
               
               })}
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}> Upper Case ALL</button>
            <button onClick={MarkDoneAll}> Mark Done All</button>
        </div>
    );
}