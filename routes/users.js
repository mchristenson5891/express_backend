const express = require('express');
const router = express.Router();

const User = require('../models/User')


router.get('/', (req, res) => {
  return res.json({data: 'Received a GET HTTP method users'});
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.json({user})
  } catch(err) {
    res.json({err})
  }
});

router.put('/', (req, res) => {
  return res.json({data: 'Received a PUT HTTP method user'});
});

router.delete('/', (req, res) => {
  return res.json({data: 'Received a DELETE HTTP method user'});
});

module.exports = router;
