import React from 'react';

let obj = {
    textAlign : 'center',
    marginTop : '5px',
    color : 'blue'
}

const Heading = () => {
    return (
        <h1 style={obj}> This is a rating app </h1>
    );
}

export default Heading;