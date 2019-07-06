import React from 'react';

function Inputs({handleChange,nombre,apellido,sayHi}) {
    return (
        <div>
            <input type="text" placeholder="nombre" value={nombre} onChange={handleChange('nombre')} />
            <br />
            <input type="text" placeholder="apellido" value={apellido} onChange={handleChange('apellido')} />
            <br />
            <button onClick={sayHi}>Hola</button>
            <br />
        </div>
    );
}

export default Inputs;
