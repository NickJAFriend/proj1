const express = require('express')
const router = express.Router()
const Author = require('../models/author')


// All Authors Route
router.get('/', async (req,res)=> {
    try {
        const authors = await Author.find({})
        res.render('authors/index', {authors: authors})
    } catch {
        res.redirect('/')
    }
    
})

// New Authors Route
router.get('/new', (req,res)=> {
    res.render('authors/new', { author: new Author()})
})

//Create Author Route
router.post('/', async (req, res)=> {
 
    const author = new Author({
        name: req.body.name
    })

    try{
        const newAuthor = await author.save()
        console.log("no error!")
        res.redirect('authors')
    } catch {
        console.error('error')
        res.render('authors/new', {
                        author: author,
                        errorMessage: 'Error creating Author'
                    })
    }

})

module.exports = router;