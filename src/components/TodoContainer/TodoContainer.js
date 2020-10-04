import React, { useContext, useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoContext } from './TodoContext';

const TodoContainer = (props) => {
    const [singleTodo, setSingleTodo] = useState()
    const [finalTodo, setFinalTodo] = useContext(TodoContext)
    const handleTodo = (e) => {
        e.preventDefault();
        let newTodo = [...finalTodo, { task: singleTodo, id: Date.now() }];
        setFinalTodo(newTodo);
        e.target.reset();
    }


    const delTodo = key => {
        const filterItems = finalTodo.filter( item => item.task !== key);
        setFinalTodo(filterItems);
    }


    return (
        <div>
            <form onSubmit={ handleTodo }>
                <input placeholder="Add a todo..." onChange={ e => setSingleTodo(e.target.value) }/>
                <button>Add</button>
            </form>

            <ul>
                {
                    finalTodo.map(item => <TodoItem key={ item.id } item={ item.task } deltodo={ delTodo } />)
                }
            </ul>
        </div>
    );
};

export default TodoContainer;