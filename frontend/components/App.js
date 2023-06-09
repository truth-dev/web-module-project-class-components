import React from 'react'

import Form from './Form';
import TodoList from "./TodoList";




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Load dishwasher',
          id:4586345,
          completed: false
        },
        {
          task: 'Clean Pool',
          id:45463,
          completed: false
        },
        {
          task: 'Feed Dogs',
          id: 125445,
          completed: false
        }


      ]
    }
  }
  handleAdd = (task) => {

    const newToDo = {
      task:task,
      id:Date.now(),
      completed: false
    }
     
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newToDo]
    });
  }

  handleComplete = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });

  }

  handleToggle = (clickedId) => {
   
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedId){
       return {
        ...todo,
        completed: !todo.completed
       } 

       }else {
        return todo
       }
        
      })
    })
  }
  
  render() {
    const { todos } = this.state;
    return (
      <div>
        Todo App
        <TodoList  handleToggle={this.handleToggle}  todos={todos} />


        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleComplete}>Completed ToDos</button>
         
      </div>
    )
  }
}
