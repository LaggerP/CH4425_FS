import React from 'react';

const AllToDo = ({ allItems, removeItem }) => {
    console.log(allItems)
    return (
        <div>
            <ul>
                {
                    allItems.map((item) =>
                        <li key={item.id}> {item.text}
                            <button onClick={() => removeItem(item.id)}>Eliminar</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default AllToDo;