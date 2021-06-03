import React from "react";
import "./Widget.css";
import "./index.css";
import Card from './Card.jsx';
import data from './Dummy.jsx';

function Widget() {
  return (
    <Card card={data[1]}/>
  );
}

export { Widget };