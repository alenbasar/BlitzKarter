import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import axios from 'axios';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const Flashcard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [animateExit, setAnimateExit] = useState(false);
  const [addNew, setAddNew] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    if (e.target.value === props.card.answer) {
      setIsFlipped(true);
    }

    return;
  };
  const handleBackClick = (e) => {
    setIsFlipped(false);
  };
  const handleDeleteClick = async (e) => {
    console.log(e.target.value);
    setAnimateExit(true);
    try {
      await axios.delete(`http://localhost:8000/cards/${e.target.value}`, {
        params: e.target.value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='c-flashcard'>
      {props.card !== '' ? (
        <ReactCardFlip isFlipped={isFlipped}>
          <div
            className={`c-flashcard__front animate__animated ${
              animateExit ? 'hidden' : ''
            }`}
          >
            <h1 className='c-flashcard__front__question'>
              {props.card.question}
            </h1>
            <ul className='c-flashcard__front__options'>
              {props.card.options.map((option, index) => (
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

          <div
            className={`c-flashcard__back animate__animated ${
              animateExit ? 'hidden' : ''
            }`}
          >
            <h1 className='c-flashcard__back__answer'>{props.card.answer}</h1>
            <div className='c-flashcard__back__options'>
              <button
                className='c-flashcard__back__options__back-btn'
                onClick={handleBackClick}
              >
                Back
              </button>
              <button
                className='c-flashcard__back__options__delete-btn'
                onClick={handleDeleteClick}
                value={props.card._id}
              >
                Delete
              </button>
            </div>
          </div>
        </ReactCardFlip>
      ) : (
        <div
          className='c-flashcard__add-new'
          onClick={() => {
            setAddNew(!addNew);
            props.onNewFlashcard(addNew);
          }}
        >
          <AddCircleOutlineRoundedIcon />
        </div>
      )}
    </div>
  );
};

export default Flashcard;
