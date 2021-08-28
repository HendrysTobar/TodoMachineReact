/* eslint-disable no-unused-vars */
import React from "react";
import {AppUI} from './AppUI'

//import './App.css';
const defaultTodos = [
  { title: "Cortar Cebolla", completed: false },
  { title: "Cortar Tomate", completed: false },
  { title: "Fritar Huevo", completed: false },
];

function App(props) {
  //Creamos un estado para el valor de la búsqueda
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);

  //!! es una forma breve de decir "todo.completed == true"
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  //función que se ejecuta cuando se completa el Todo
  function onCompleteTodo(title)
  {
    const todoIndex = todos.findIndex(todo => todo.title === title);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  //función que se ejecuta cuando se quiere borrar el Todo
  function onDeleteTodo(title)
  {
    const todoIndex = todos.findIndex(todo => todo.title === title);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }


  return (
    <AppUI
      todos = {todos}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      onCompleteTodo = {onCompleteTodo}
      onDeleteTodo = {onDeleteTodo}
    />
  );
}

export default App;
