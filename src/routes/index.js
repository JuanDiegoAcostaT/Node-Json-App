const { Router } = require('express');
const router = Router();


const Books = [];

router.get('/', (req, res, next) => {
    res.render('index.ejs', {
        Books : Books
    })
})


router.get('/new-entry', (req, res , next) => {
    res.render('newEntry');
})


router.post('/new-entry', (req, res, next) => {

    const { title, author, image, description } = req.body

    if(!title || !author || !image || !description) {
        res.status(400).send('Please write all the inputa before submit');
        return;
    }

    let newBook = {
        title : title,
        author : author,
        image : image, 
        description : description
    }

    Books.push(newBook);
    res.send('received')
})

module.exports = router;