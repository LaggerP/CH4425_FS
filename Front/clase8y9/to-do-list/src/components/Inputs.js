import React from 'react';

const Inputs = ({item, addItem, handleChange}) => {
    return (
        <div>
            <input type="text" placeholder="Agrege item" value={item} onChange={handleChange}/>
            <button onClick={addItem}>Agregar</button>
        </div>
    );
};

export default Inputs;