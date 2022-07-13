import React from "react";
import "./styles.css";

const Slides = (props) => {
  return (
    <div>
      <h1 data-testid="title">{props.title}</h1>
      <p data-testid="text">{props.text}</p>
    </div>
  );
};

export default Slides;
