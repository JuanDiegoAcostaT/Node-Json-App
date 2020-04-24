const { Router } = require('express');
const router = Router();


const Books = [];

router.get('/', (req, res, next) => {
    res.render('index.ejs')
})


router.get('/new-entry', (req, res , next) => {
    res.render('newEntry');
})


router.post('/new-entry', (re, res, next) => {

    const { title, author, image, decription } = req.body

    if(!title || !author || !image || !description) {
        res.status(400).send('Please write all the inputa before submit');
        return;
    }

    let newBok = {
        title : title,
        author : author,
        imagw : image, 
        decrition : description
    }

    Books.push(req.body);
    res.send('received')
})

module.exports = router;