import React, { useState, createContext } from 'react';

export const TodoContext = createContext();


export const TodoProvider = props => {
    const [finalTodo, setFinalTodo] = useState([]);

    return (
        <TodoContext.Provider value={ [finalTodo, setFinalTodo] }>
            { props.children }
        </TodoContext.Provider>
    );
}