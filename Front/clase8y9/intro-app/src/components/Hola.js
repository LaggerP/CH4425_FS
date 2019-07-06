import React from 'react';

function Hola(props) {
    console.log(props)
  return (
    <div>
        {`${props.saludo} ${props.nombre} ${props.pregunta}`}
    </div>
  );
}

export default Hola;
