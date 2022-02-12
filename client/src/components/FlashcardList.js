import React, { useState, useEffect, useCallback, useRef } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ cardData }) => {
  return (
    <div className='c-flashcards'>
      {cardData.map((card) => {
        return <Flashcard card={card} key={card._id} />;
      })}
    </div>
  );
};

export default FlashcardList;
