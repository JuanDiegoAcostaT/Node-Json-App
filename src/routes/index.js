const { Router } = require('express');
const router = Router();


router.get('/', (req, res, next) => {
    res.render('index.ejs')
})


router.get('/new-entry', (req, res , next) => {
    res.render('newEntry');
})


router.post('/new-entry', (re, res, next) => {
    res.send('received')
})

module.exports = router;