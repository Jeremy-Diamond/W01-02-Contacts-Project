const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags = ['Hello World']
    res.send('Welcome to my CIT341 Project! Please add a route to get what you are looking for.');});

router.use('/contacts',require('./contacts'));

module.exports = router;