/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AppUI } from './AppUI'
import { TodoProvider } from "../TodoContext";
//import './App.css';




/////////////////////////////////////////////////////Componente App////////////////////////////////////////////////////////
function App(props) { 

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
