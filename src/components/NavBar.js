import React, { useContext } from 'react';
import './NavBar.css';
import { TodoContext } from './TodoContainer/TodoContext';

const NavBar = () => {
    const [finalTodo, setFinalTodo] = useContext(TodoContext);

    return (
        <header className="nav-header">
            <span className="todo-count">{ finalTodo.length }</span>
        </header>
    );
}



export default NavBar;