const express = require('express');
const Movie = require('../models/movie.model.js'); // Adjust the path as needed

const router = express.Router();

router.get('/', (req, res) => {
    Movie.find()
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', async (req, res) => {
    const movie = new Movie({
        movieID: req.body.movieID,
        reviews: req.body.reviews
    });

    try {
        const newMovie = await movie.save();
        res.status(200).json(newMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/addReview/:movieID', async (req, res) => {
    const movieID = req.params.movieID;
    const newReview = req.body.review; 

    if (!newReview) return res.status(400).json({ message: 'No review in the request body' });

    try {
        const movie = await Movie.findOne({ movieID: movieID });
        
        if (!movie) return res.status(404).json({ message: `Movie with ID ${movieID} not found!` });
        
        movie.reviews.push(newReview);
        
        const updatedMovie = await movie.save();
        
        return res.status(200).json(updatedMovie);
        
    } catch (err) {
        console.log(err); // Log the error to the console to have more details.
        return res.status(500).json({ message: err.message });
    }
});




module.exports = router;