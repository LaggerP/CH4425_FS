import React from 'react';
import Hola from './components/Hola.js';
import Lista from './components/Lista.js';
import Container from './components/Container.js';
import FetchContainer from './components/FetchContainer';
import './App.css';

const lista = [
  {
    nombre: 'pablo',
    id: '1',
  },
  {
    nombre: 'pepe',
    id: '2',
  },
]

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8]

function App() {
  return (
    <div className="App">
      <Hola
        saludo="hola"
        nombre="pablo"
        pregunta="¿como estas?"
      />
      <hr/>
      <Lista 
        lista={lista} 
        listaNumeros={listaNumeros}
      />
      <hr/>
      <Container/>
      <hr/>
      <FetchContainer/>
    </div>
  );
}

export default App;
