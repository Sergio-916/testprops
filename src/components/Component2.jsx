import React, { useEffect, useState } from 'react';

const Component2 = ({flag, writeComp1 }) => {
    const [isRedBlockVisible, setRedBlokVisible] = useState(true)

  useEffect(() => {
    setRedBlokVisible(!writeComp1), [writeComp1]
  })
  console.log('writeComp1', !writeComp1)

    return (
        <>
            {flag && isRedBlockVisible &&  (<div className='block' style={{ backgroundColor: "red", width: "300px", minHeight: "200px" }}>
                <h1>Hello World </h1>
            </div>)
            }
          <h2>Write in component 2</h2>
           <p>{writeComp1}</p> 
        </>
    );
};

export default Component2;