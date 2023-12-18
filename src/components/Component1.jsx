import React, { useState } from 'react';

const Component1 = ({ toggleFlag , writeInComp }) => {

    



    return (
        <div>
            <button onClick={toggleFlag}>Hide block</button>
            <input type="text" onChange={writeInComp} 
            />
        </div>
    );
};

export default Component1;

