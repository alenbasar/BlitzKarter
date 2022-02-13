import React, { useState, useEffect, useCallback, useRef } from 'react';
import Flashcard from './Flashcard';
import Grid from '@mui/material/Grid';

const FlashcardList = ({ cardData }) => {
  return (
    <Grid className='c-flashcards' container>
      {cardData.map((card) => {
        return <Flashcard card={card} key={card._id} item />;
      })}
      <Flashcard card={''} className='c-add-new' />
    </Grid>
  );
};

export default FlashcardList;
