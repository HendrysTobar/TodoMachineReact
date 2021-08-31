/* eslint-disable no-unused-vars */
import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

const TodoForm = () => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const {onAddTodo:saveTodo, setModalOpen} = React.useContext(TodoContext);

  function onChange(event) {
      setTodoTitle(event.target.value);
  }

  function onCancel() {
    setModalOpen(false);
  }

  function onAccept(event) {
    //TODO
    event.preventDefault();
    saveTodo(todoTitle);
    setModalOpen(false);
  }

  return (
    <form onSubmit={onAccept}>
      <label> Crear Nuevo TODO </label>
      <textarea placeholder="Cortar Cebolla" onChange={onChange}></textarea>
      <div>
        <button className= "TodoForm-button TodoForm-button--cancel"type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button className = "TodoForm-button TodoForm-button--add" type="submit" onClick={onAccept}>
          Aceptar
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
