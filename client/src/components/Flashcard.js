import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      {
        <ReactCardFlip isFlipped={isFlipped}>
          <div>
            {card.question}
            <button onClick={handleClick}>Flip Card</button>
          </div>

          <div>{card.answer}</div>
        </ReactCardFlip>
      }
    </div>
  );
};

export default Flashcard;
