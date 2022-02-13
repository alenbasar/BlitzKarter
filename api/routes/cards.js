const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// GET back all the users
router.get('/', async (req, res) => {
  // res.send('We are on posts');
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.json({ error: error });
  }
});

// GET back specific users
router.get('/:cardID', async (req, res) => {
  try {
    const user = await Card.findById(req.params.cardID);
    res.json(user);
  } catch (error) {
    res.json({ error: error });
  }
});

// Submits a user
router.post('/', async (req, res) => {
  const card = new Card({
    question: req.body.question,
    answer: req.body.answer,
    options: [...req.body.options],
  });

  try {
    const savedCard = await card.save();
    res.json(savedCard);
  } catch (error) {
    res.json({ error: error });
  }
});

// Delete a user
router.delete('/:cardID', async (req, res) => {
  try {
    await Card.remove({
      _id: req.params.cardID,
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
