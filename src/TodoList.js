import React from 'react'

const TodoList = ({ item, deletedItems, id }) => {
    return (
        <>
            <div className="todo_style">
                <button onClick={() => deletedItems(id)}>-</button>
                <li>{item}</li>
            </div>
        </>
    );
};


export default TodoList;