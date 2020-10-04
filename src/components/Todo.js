import React, { useState } from 'react';
import './Todo.css';

function List(props){
    function removeTask(taskIndex){
        props.tasks.splice(taskIndex, 1);
        //props.newtodo(props.tasks);
        console.log(props.tasks)
    }

    return (
        <ul id="todo-list">
            {props.tasks.map( (task, index) => (
                <li key={ task.id } id={task.id}>
                    { task.taskName }
                    <button onClick={ () => removeTask(index) }>Del</button>
                </li>
            ))}
        </ul>
    );
}



function Todo(props){
    let  [todos, setTodo] = useState([])
    let  [text, setText] = useState('')
    let  [count, setCount] = useState(0)

    function handleSubmit(e){
        e.preventDefault();
        e.target.reset();
        if( text === 0){
            return;
        }
  
        const task = {
            taskName: text,
            id: Date.now()
        };
        setTodo(todos = todos.concat(task));
        setCount( count += 1);
        props.count(count);
    }
  
  
    function handleChange(e){
        setText(e.target.value);
    }
    

    return (
        <div className="todo-container">
            <h3>Todo</h3>
            <form onSubmit={ handleSubmit }>
                <input onChange={ handleChange }/>
                <button>Add</button>
            </form>

            <List tasks={ todos } newtodo={ setTodo }/>
        </div>
    );
}


export default Todo;

