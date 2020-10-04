import React from 'react';

const TodoItem = ({ item, deltodo }) => {
    return (
    <li> 
        { item }
        <button onClick={ () => deltodo(item) }>Del</button>
    </li>
    );
};

export default TodoItem;