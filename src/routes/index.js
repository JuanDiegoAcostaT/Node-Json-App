const { Router } = require('express');
const router = Router();
const fs = require('fs');

const json_books = fs.readFileSync('src/books.json', 'utf-8');
const books = JSON.parse(json_books);

router.get('/', (req, res, next) => {
    res.render('index.ejs', {
        books : books
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

    books.push(newBook);

    const json_books = JSON.stringify(books)
    fs.writeFileSync('src/books.json', json_books, 'utf-8')

    // res.send('received')
    res.redirect('/');
})

module.exports = router;