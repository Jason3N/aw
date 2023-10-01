import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Grid, Button, TextField } from '@mui/material';

function MovieContainer() {
  const [data, setData] = useState([]);
  const [reviews, setReviews] = useState({}); // Object to hold reviews for each movie.

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
    
    // Assuming backend expects a single review in the object with key "review"
    axios.put(`http://localhost:5000/movie/addReview/${movieID}`, {
      review: reviews[movieID]
    })
    .then(response => {
      console.log('Review Added: ', response.data);
      setReviews({...reviews, [movieID]: ''}); // Clear the specific review input
      fetchData(); // Refetch the data to get updated reviews
    })
    .catch(error => {
      console.error('Error adding review: ', error);
    });
  }

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          {data.map((movie, index) => (
            <Grid item md={4} key={index}> 
              <Box>
                <Typography variant="h6">
                  {movie.movieID}
                </Typography>
                {movie.reviews && movie.reviews.map((review, idx) => (
                  <Typography key={idx}>
                    {review}
                  </Typography>
                ))}
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={(e) => handleSubmit(e, movie.movieID)}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id={`review-${movie.movieID}`}
                    label="Add Review"
                    name="review"
                    autoComplete="review"
                    autoFocus
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
                    Submit
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MovieContainer;
