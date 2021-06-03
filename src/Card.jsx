import React from 'react';
import Star from './Star';

let small = {
    fontSize: "0.75rem",
    fontWeight: "bold",
};

function Card(prop) {
    let props = prop.card;
    return (
        <div className="card">
          <i className="fas fa-chevron-left cls"></i>
          <div>
            <div className="rating">
              <Star rating={props.rating}/>
            </div>
            <div className="myflex">
              <img className="imgsrc" src={props.imageUrl} alt="img" />
              <div className="pad">
                <p> {props.name} </p>
                <p style={small}> @{props.name} &bull; {props.date} </p>
              </div>
              <img className="imgright" src={props.source} alt="icon" />
            </div>
            <div className="text">
              <p>
                {props.text}
              </p>
            </div>
          </div>
          <i className="fas fa-chevron-right cls"></i>
        </div>
      );
}

export default Card ; 