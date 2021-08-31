import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props)
{
    //Esto es una función que se usa para responder ante el evento onclick del botón.
    function onClickButtonCreate(msg)
    {
        props.setModalOpen(previousState => !previousState);
    }

    return (
        <button 
        className= "CreateTodoButton"
        onClick = {() => onClickButtonCreate("Aquí crear el TODO con el modal")}
                

        >+</button>
    )
}

export {CreateTodoButton};