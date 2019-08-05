// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="task-list">
            {props.toDoList.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-btn" onClick={props.clearFinished}>
                Clear Finished
      </button>
        </div>
    );
};

export default TodoList;
