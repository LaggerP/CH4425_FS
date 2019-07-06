import React from 'react';

function Lista({lista, listaNumeros}) {
    console.log(lista, listaNumeros)
  return (
    <div>
        <ul>
            {lista.map(({nombre, id}) => <li key={id}>{nombre}</li>)}
        </ul>
        <ul>
            {
                listaNumeros.map((listaNumeros) =>{
                    if(listaNumeros %2 === 0){
                        return <li key={listaNumeros}>Buzz</li>
                    }else if (listaNumeros %3 === 0){
                        return <li key={listaNumeros}>Fizz</li>
                    }else if (listaNumeros %2 === 0 & listaNumeros%3 === 0){
                        return <li key={listaNumeros}>FizzBuzz</li>
                    }else{
                        return listaNumeros
                    }
                })
            }
        </ul>
    </div>
  );
}

export default Lista;
