import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos})
{
    return (
      <h2 className = "TodoCounter">
        Has hecho {completedTodos} de {totalTodos} tareas
      </h2>
    )
}

export {TodoCounter};
