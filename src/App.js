import React from 'react'
import ReactDOM from 'react-dom'

import TodoList from './components/TodoComponents/TodoList'
// import TodoForm from './components/TodoComponents/TodoForm'

import "./App.css";

const toDoList = [
    {
        task: 'Sameple Task',
        id: 1528817077286,
        completed: false
    },
    {
        task: 'Sameple Task_2',
        id: 1528817084358,
        completed: false
    },
    {
        task: 'Sameple Task_3',
        id: 1528817084399,
        completed: true
    },
]

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            toDoList: toDoList
        }
    }

    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    toggleItem = id => {
        this.setState({
            toDoList: this.state.toDoList.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item
                }
            })
        })
    }

    addItem = itemTask => {
        const newItem = {
            task: itemTask,
            id: Date.now(),
            completed: false
        }
        this.setState({
            toDoList: [...this.state.toDoList, newItem], todo: ""
        })
    }

    clearFinished = () => {
        this.setState({
            toDoList: this.state.toDoList.filter(item => !item.completed)
        })
    }

    render() {
        return (
            <div className="app">
                <div className="text">
                    <h2>Track your Todo's!</h2>
                    <p>Click to Finish a Task</p>
                </div>
                <div className='test'>
                    <TodoList
                        clearFinished={this.clearFinished}
                        toDoList={this.state.toDoList}
                        toggleItem={this.toggleItem}
                        addItem={this.addItem}
                    />
                </div>
            </div>
        );
    }
}

export default App;

