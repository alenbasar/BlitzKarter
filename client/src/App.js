import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import NewFlashcard from './components/NewFlashcard';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAKE_DATA = [
  {
    _id: '6204b2227f734e9b938cc273',
    question: 'What is this db?',
    answer: 'mongodb',
    options: ['mongodb', 'mariaDB'],
    __v: 0,
  },
  {
    _id: '6204c9fa41c3a26088a3b13c',
    question: "What's 2x2?",
    answer: '4',
    options: ['4', 'Blacktown', '8'],
    __v: 0,
  },
];

function App(props) {
  const [newCardAnimate, setNewCardAnimate] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState();

  const getCardsData = async () => {
    try {
      const res = await fetch('http://localhost:8000/cards');
      const data = await res.json();
      setCardData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCardsData();
  }, [newFlashcard]);

  const isNewFlashcard = (newFlashcard) => {
    setNewFlashcard(newFlashcard);
    console.log(newFlashcard);
  };
  const Posted = (isPosted) => {
    setNewFlashcard(false);
  };

  return (
    <div className='App'>
      <header className='c-header'>
        <h1 className='c-header__logo'>BlitzKarter</h1>
        {/* <ul className='c-header__nav'>
          <li>
            <button
              className='c-header__nav__btn'
              onClick={() => {
                setNewCardAnimate(!newCardAnimate);
              }}
            >
              {newCardAnimate ? 'My Cards' : 'Create New'}
            </button>
          </li>
        </ul> */}
      </header>
      <section className='c-body'>
        {newFlashcard ? (
          <NewFlashcard isPosted={Posted} />
        ) : (
          <FlashcardList cardData={cardData} onAddNew={isNewFlashcard} />
        )}
      </section>
    </div>
  );
}

export default App;
