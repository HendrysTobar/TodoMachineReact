import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

//Esta función recib como props, los estados que recibe desde App
function TodoSearch()
{

    const {searchValue, setSearchValue} = useContext(TodoContext);
    /*Esto usa el Hook useState. Este recibe un parámetro, el primer valor,
    que solo se usa en el primer render.
    El Hook retorna dos valores, el valor actual del estado (searchValue) y una función 
    para cambiarlo (SetSearchValue)
    */
    
    //const [searchValue, SetSearchValue] = React.useState('');

    function onSearchChanged(event)
    {
        console.log(event.target.value);
        //Cuando cambia el valor de búsqueda, se almacena en el estado
        setSearchValue(event.target.value);
    }

    return [
        <input
        className = "TodoSearch"
        placeholder="Cebolla"
        //Se almacena el valor de a búsqueda en el valor de este input
        value = {searchValue}
        onChange = {onSearchChanged}
        ></input>
        ,
        <p>El valor del search es: {searchValue}</p>
    ]
}

export {TodoSearch};
