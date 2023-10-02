import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Grid, Button, TextField } from '@mui/material';
import '../App.css'

function MovieContainer() {
  const [data, setData] = useState([]);
  const [reviews, setReviews] = useState({}); 

  const fetchData = () => {
    axios.get("http://localhost:5000/movie/")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log("ERROR WAS DETECTED.")
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e, movieID) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/movie/addReview/${movieID}`, {
      review: reviews[movieID]
    })
    .then(response => {
      setReviews({...reviews, [movieID]: ''}); 
      fetchData();
    })
    .catch(error => {
      console.error('ERROR: ', error);
    });
  }

  return (
    <div>
      <Container>
        <Grid container spacing={1}>
          {data.map((movie, index) => (
            <Grid className = "movie-card" item md={6} key={index}> 
              <Box>
                <div className = "movie-title">
                  {movie.movieID}
                </div>
                {movie.reviews && movie.reviews.map((review, idx) => (
                  <div className = 'review-card' key={idx}>
                    {review}
                  </div>
                ))}
                </Box>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={(e) => handleSubmit(e, movie.movieID)}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id={`review-${movie.movieID}`}
                    label="Add your own review!"
                    name="review"
                    className = "submission-card"
                    value={reviews[movie.movieID] || ''}
                    onChange={(e) => setReviews({...reviews, [movie.movieID]: e.target.value})}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit Review
                  </Button>
                </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MovieContainer;
