import { React, Fragment, useContext } from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

//De esta manera se usa el contexto en este módulo.
//Los valores son las propiedades que se crean y se pasan en el Provider




export function AppUI() 
{

  const {
    loading,
    error,
    searchValue,
    todos,
    onCompleteTodo,
    onDeleteTodo
  } = useContext(TodoContext );


  return (
    <Fragment>
      <TodoCounter />

      <TodoSearch />
      
        <TodoList>
          {//Si está carganbdo poner un mensaje
            loading && <p>Estamos cargando</p>
          }

          {//Si hubo un error poner un mensaje
            error && <p>Hubo un error</p>}

          {//Si no está cargando y los TODOS encontrados es vacío 
            (!loading && searchValue !== "" && (todos.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()).lenght))) &&
            <p>No hay TODOS que coincidan con la búsqueda</p>
          }

          {todos.map((todo) => {
            if (
              searchValue === "" ||
              todo.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
            ) {
              return (
                <TodoItem
                  completed={todo.completed}
                  key={todo.title}
                  text={todo.title}
                  onComplete={onCompleteTodo}
                  onDelete={onDeleteTodo}
                />
              );
            }
            return "";
          })}

        </TodoList>
        
          
        
      <CreateTodoButton />
    </Fragment>
  );
}
