import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component{
state={
  todos:[
    {id:1,content:'Pistear'},
    {id:2,content:'Mamar culo'}
  ]
}
deleteTodo=(id)=>{
  const todos = this.state.todos.filter(todo=>{
    return todo.id !== id
  });
  this.setState({
    todos
  })
}

addTodo = (todo) => {
  todo.id = Math.random()
  // Agregamos ID único a nuestro ToDo y con el spread operator traemos los TODOS del estado con un spread operator y agregamos el parámetro todo
  let todos = [...this.state.todos, todo];
  this.setState({todos});
}

  render(){
    return(
      <div className='todo-app container'>
      <h1 className="center blue-text">Tareas pendientes</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
