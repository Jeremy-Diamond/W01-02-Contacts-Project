const router = require('express').Router();

router.get('/', (req, res) => {res.send('Welcome to my CIT341 Project! Please add a route to get what you are looking for.');});

router.use('/contacts',require('./contacts'));

module.exports = router;