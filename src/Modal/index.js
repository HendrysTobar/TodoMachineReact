import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


//Este componente pinta en modo Modal los hijos que se le envian por Prop
export function Modal(props)
{
    return(
        //La función creaTePortal renderiza elementos en el elemento HTML que se le pase
        ReactDOM.createPortal(
            <div className = "ModalBackground">
                {props.children}
            </div>
            ,
            document.getElementById("modal")
        )
    )
}

