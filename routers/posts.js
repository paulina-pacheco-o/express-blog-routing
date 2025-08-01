const express = require('express');

const router = express.Router();

//Index
router.get('/', (req, res) => {
  res.send('Lista post')
});

//Show
router.get('/:id', (req, res) => {
  res.send(`Dettaglio del post con id ${req.params.id}`);
});

//Create


//Update


//Delete