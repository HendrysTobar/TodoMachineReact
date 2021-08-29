import React, { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter()
{
  const {totalTodos, completedTodos} = useContext(TodoContext);
    return (
      <h2 className = "TodoCounter">
        Has hecho {completedTodos} de {totalTodos} tareas
      </h2>
    )
}

export {TodoCounter};
