import React, { useState } from 'react';
import axios from 'axios';

const NewFlashcard = (props) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [options, setOptions] = useState('');
  const [falseForm, setFalseForm] = useState(false);
  const [isPosted, setIsPosted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (question === '' || answer === '' || options === '') {
      setFalseForm(true);
      return;
    }

    const optionsArray = options.split(',').filter((o) => {
      return o != ' ';
    });

    const postBody = {
      question: question,
      answer: answer,
      options: optionsArray,
    };

    setQuestion('');
    setAnswer('');
    setOptions('');

    try {
      await axios.post('http://localhost:8000/cards', postBody);
    } catch (err) {
      console.error(err);
    }

    props.isPosted(false);
    console.log(postBody);
  };

  return (
    <div
      className={`c-new-flashcard animate__animated animate__bounceIn ${
        falseForm ? 'false' : ''
      }`}
    >
      <form method='post' onSubmit={handleSubmit}>
        <span>Make sure every input is filled</span>
        <input
          type='text'
          placeholder='Question'
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Answer'
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <textarea
          placeholder='Options (separate with ",")'
          value={options}
          // cols='20'
          rows='10'
          onChange={(e) => {
            setOptions(e.target.value);
          }}
        />
        <button>Create New Card</button>
      </form>
    </div>
  );
};

export default NewFlashcard;
