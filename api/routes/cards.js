const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// GET back all the posts
router.get('/', async (req, res) => {
  // res.send('We are on posts');
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.json({ error: error });
  }
});

// GET back specific posts
router.get('/:cardID', async (req, res) => {
  try {
    const post = await Card.findById(req.params.cardID);
    res.json(post);
  } catch (error) {
    res.json({ error: error });
  }
});

// Submits a post
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

module.exports = router;
