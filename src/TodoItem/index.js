import React from 'react';
import './TodoItem.css'

function TodoItem(props)
{
    function onClickCompleted()
    {
        props.onComplete(props.text);
    }

    function onClickDeleted()
    {
        props.onDelete(props.text);
    }

    return (
        <li className="TodoItem">
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick = {onClickCompleted}
            >
                

            √
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} >{props.text}</p>
            <span 
            className="Icon Icon-delete"
            onClick = {onClickDeleted}
            >

            X
            </span>
        </li>
    )
}

export {TodoItem};
