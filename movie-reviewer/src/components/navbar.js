import { Container, Box, Typography, Grid, Button, TextField } from '@mui/material';
import '../App.css'

function NavBar(){
    return (
        <div>
            <Box className = "navbar-container">
                <Grid container spacing = {2}>
                   <Grid className = "title-card" item md = {6}>
                    Welcome to AggieWorks' Movie Reviewer!
                   </Grid>
                   <Grid className = "title-card2" item md = {6}>
                    Barbie v.s Oppenheimer! Which one was the blockbuster of the summer! Leave your reviews down below!
                   </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default NavBar