//En este archivo se define el Hook useLocalStorage 

import React from 'react';
import { useState } from 'react';
// const defaultTodos = [
//     { title: "Cortar Cebolla", completed: false },
//     { title: "Cortar Tomate", completed: false },
//     { title: "Fritar Huevo", completed: false },
//   ];
  
  //Hook que se encarga de obtener y guardar cosas del LocalStorage
  //Recibe el nombre de la clave para usar en el LocalStorage y el valor inicial
  export function useLocalStorage(itemName, initialValue) {
  
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
  
        //Función para obtener los ITEMS del LocalStorage
        function loadItem() {
  
          const saved = localStorage.getItem(itemName);
          let parsedItems;
          //Si no hay nada en el LocalStorage
          if (!saved) {
            //Guarde en el LocalStorage el valor inicial
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            //E arreglo de respuesta es un arreglo vacío
            parsedItems = [];
          }
          else {
            //... de lo contrario el arreglo es el obtenido
            parsedItems = JSON.parse(saved);
          }
          return parsedItems;
        }
  
        try {
          const parsedItem = loadItem();
          setLoading(false);
          setItem(parsedItem);
        } catch (e) {
          setError(true);
        }
      }, 2000)
    })
  
  
  
    //Función para guardar los Todos
    function saveItem(itemToSave) {
      try {
        localStorage.setItem(itemName, JSON.stringify(itemToSave));
        setItem(itemToSave);
      } catch (e) {
        setError(true);
      }
    }
    //retornamos los elementos necesarios para el Hook, comon son 3 se deben entregar en un objeto
    return { item, saveItem, loading, error }
  }