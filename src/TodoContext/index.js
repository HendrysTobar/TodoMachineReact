import React from 'react';
import { useLocalStorage } from './useLocalStorage';

//esto creo un contexto, que permite compartir estados entre los componentes de la aplicación

export const TodoContext = React.createContext();


//Esta función sirve para poder crear un atajo para acceder al componente TodoContext.Provider
export function TodoProvider(props)
{
  //Creamos un estado para el valor de la búsqueda
  const [searchValue, setSearchValue] = React.useState("");
  //Se cargan los datos usando el Custom Hook creado arriba, las instrucciones en el objeto, cambian el nombre de la variable
  //El nombre de los atributos dentro del objeto deben llamarse igual que el objeto que retorna, por eso se hace el cambio de nombre
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);

  //!! es una forma breve de decir "todo.completed == true"
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  //función que se ejecuta cuando se completa el Todo
  function onCompleteTodo(title) {
    const todoIndex = todos.findIndex(todo => todo.title === title);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  //función que se ejecuta cuando se quiere borrar el Todo
  function onDeleteTodo(title) {
    const todoIndex = todos.findIndex(todo => todo.title === title);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  //Esto usa el Hook useEffect el cual permite ejecutar una función justo antes de renderizar
  //cuando React ya ha modificado el DOM pero no se ha generado el HTML
  React.useEffect(() => {


  }, [totalTodos]//se pone un arreglo con la variable que se quiere observar, cuando esta cambia es que se ejcuta la función
   )

   return(
        //El componente TodoProvider incluye al componente TodoContext.Provider y este a su vez incluye todos los hijos
        //que se hayan puesto dentro de TodoProvider.
        //La propiedad value contiene los datos que se comparten en el contexto
        <TodoContext.Provider value = {{
            loading,
            error,
            todos,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            onCompleteTodo,
            onDeleteTodo            
        }}>
            {props.children}

        </TodoContext.Provider>
    )
}