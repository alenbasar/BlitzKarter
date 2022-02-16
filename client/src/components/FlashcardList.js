import React, { useState, useEffect, useCallback, useRef } from 'react';
import Flashcard from './Flashcard';
import Grid from '@mui/material/Grid';

const FlashcardList = (props) => {
  const newFlashcard = (newFlashcard) => {
    props.onAddNew(newFlashcard);
  };
  return (
    <Grid className='c-flashcards' container>
      {props.cardData.map((card) => {
        return <Flashcard card={card} key={card._id} item />;
      })}
      <Flashcard
        card={''}
        className='c-add-new'
        onNewFlashcard={newFlashcard}
      />
    </Grid>
  );
};

export default FlashcardList;
