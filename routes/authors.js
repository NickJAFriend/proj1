const express = require('express')
const router = express.Router()
const Author = require('../models/author')


// All Authors Route
router.get('/', (req,res)=> {
    res.render('authors/index')
})

// New Authors Route
router.get('/new', (req,res)=> {

    res.render('authors/new', { author: new Author()})
})

//Create Author Route
router.post('/', (req, res)=> {
    console.log("Create Author Route initiated...")
    /*
    const author = new Author({
        name: req.body.name
    })

    author.save((err, newAuthor) => {
        if (err){
            res.render('authors/new', {
                author: author,
                errorMessage: 'error creating author'
            })
        }else {
            //res.redirect(`authors/${newAuthor.id}`)
            res.redirect(`authors/`)
        }
    })
    */
    const author = new Author({
        name: req.body.name
    })
    author.save((err, newAuthor)=>{
        if (err) {
            /*res.render('authors/new', {
                author: author,
                errorMessage: 'Error creating Author'
            })*/
        } else {
            console.log("no error!")
            res.redirect('authors')
        }
        
    })
    //res.send(req.body.name + " This is it.")
})

module.exports = router;