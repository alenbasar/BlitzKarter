import React, { useState, useEffect, useRef } from 'react';
import ReactCardFlip from 'react-card-flip';

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [height, setHeight] = useState('initial');

  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  }

  useEffect(setMaxHeight, [card.question, card.answer, card.options]);
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight);
    return () => window.removeEventListener('resize', setMaxHeight);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    if (e.target.value === card.answer) {
      setIsFlipped(true);
    }

    return;
  };
  const handleBackClick = (e) => {
    setIsFlipped(false);
  };

  return (
    <div className='c-flashcard'>
      {
        <ReactCardFlip isFlipped={isFlipped}>
          <div className='c-flashcard__front' ref={frontEl}>
            <h1 className='c-flashcard__front__question'>{card.question}</h1>
            <ul className='c-flashcard__front__options'>
              {card.options.map((option, index) => (
                <li key={index}>
                  <button
                    className='c-flashcard__front__options__option'
                    onClick={handleClick}
                    value={option}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className='c-flashcard__back' ref={backEl}>
            <h1 className='c-flashcard__back__answer'>{card.answer}</h1>
            <button
              className='c-flashcard__back__btn'
              onClick={handleBackClick}
            >
              Back
            </button>
          </div>
        </ReactCardFlip>
      }
    </div>
  );
};

export default Flashcard;
