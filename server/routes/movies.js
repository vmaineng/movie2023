const express = require('express')

const { TMDB_BASE_URL, apiKey } = process.env;

const router = express.Router()

//get all movies
router.get('/', (req, res) => {
    res.json({msg: "get all movies"})
})

//get a single movie
router.get('/:id', (req, res) => {
    res.json({msg: "get a single movie"})
})

//post a new movie
router.post('/', (req, res) => {
    res.json({msg: "POST a new movie"})
})

//Delete a new movie
router.delete('/:id', (req, res) => {
    res.json({msg: "POST a new movie"})
})


//patch a new movie
router.patch('/:id', (req, res) => {
    res.json({msg: "POST a new movie"})
})

module.exports = router