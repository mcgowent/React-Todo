// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';


const TodoList = props => {
    return (
        <div className="task-list">
            {props.toDoList.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <div className="sameLine">
                <TodoForm addItem={props.addItem} />

                <button className="clear-btn" onClick={props.clearFinished}>
                    Clear Finished
      </button>
            </div>
        </div>
    );
};

export default TodoList;
