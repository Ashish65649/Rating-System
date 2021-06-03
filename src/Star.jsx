import React from 'react';

let object = {
    fontSize : '200%' ,
    color : 'red'
}

function func(rate) {
    let arr = new Array(rate);
    arr.fill(0);
    return arr.map((value, index,arr) => {
        return (<span key={index} style={object}>&#9733;</span>);
    });
}

function Star(props) {
    let rate = props.rating
    return (
        <React.Fragment>
            {func(rate)}
        </React.Fragment>
    ) ;
}
export default Star ; 