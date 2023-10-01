import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography } from '@mui/material';

function MovieContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/movie/")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log("ERROR WAS DETECTED.")
      })
  }, []);

  return (
    <div>
      <Container>
        {data.map((movie, index) => (
          <Box key={index} sx={{ margin: 4 }}>
            <Typography variant="h6">
              {movie.movieID}
            </Typography>
            {movie.reviews && movie.reviews.map((review, idx) => (
              <Typography key={idx} variant="body1">
                {review}
              </Typography>
            ))}
          </Box>
        ))}
      </Container>
    </div>
  );
}

export default MovieContainer;
