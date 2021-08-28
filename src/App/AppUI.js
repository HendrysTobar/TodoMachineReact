import { React, Fragment } from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

export function AppUI({
  todos,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  onCompleteTodo,
  onDeleteTodo,
}) {
  return (
    <Fragment>
      <TodoCounter
        //Se envian parámetros
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />

      <TodoSearch
        //Se envian los estados como props
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
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
