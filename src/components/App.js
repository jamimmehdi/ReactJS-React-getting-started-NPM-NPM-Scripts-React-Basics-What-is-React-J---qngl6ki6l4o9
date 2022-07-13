import '../styles/App.css';
import React, { Component, useEffect, useState } from "react";

import Data from "../data";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [restartButtonDisabled, setRestartButtonDisabled] = useState(true);
  const [slides, setSlides] = useState(Data);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const restartSlide = () => {
    setCurrentSlide(0);
    setNextButtonDisabled(!setNextButtonDisabled);
    setPrevButtonDisabled(!setPrevButtonDisabled);
  };

  useEffect(() => {
    // Next button disable
    if (currentSlide < slides.length - 1) {
      setNextButtonDisabled(false);
    } else {
      setNextButtonDisabled(true);
    }

    // Prev button disable
    if (currentSlide > 0) {
      setPrevButtonDisabled(false);
    } else {
      setPrevButtonDisabled(true);
    }

    // Restart button disable
    if (currentSlide === 0) {
      setRestartButtonDisabled(true);
    } else {
      setRestartButtonDisabled(false);
    }
  }, [currentSlide]);


  return (
    <div>
      <div id="slide">
        <h1 data-testid="title">{slides[0].title}</h1>
        <p data-testid="text">{slides[0].text}</p>
      </div>

      <div id='navigation'>
        <button data-testid="button-prev"
          onClick={prevSlide}
          disabled={prevButtonDisabled}
        >
          Prev
        </button>

        <button data-testid="button-next"
          onClick={nextSlide}
          disabled={nextButtonDisabled}
        >
          Next
        </button>

        <button data-testid="button-restart"
          onClick={restartSlide}
          disabled={restartButtonDisabled}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default App;
