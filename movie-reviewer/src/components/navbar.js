import { Container, Box, Typography, Grid, Button, TextField } from '@mui/material';
import '../App.css'

function NavBar(){
    return (
        <div>
            <Box className = "navbar-container">
                <Grid container spacing = {2} style = {{marginTop: '10px'}}>
                   <Grid className = "title-card" item md = {12}>
                    Welcome to AggieWorks' Movie Reviewer! Barbie v.s Oppenheimer! 
                    Which one was the blockbuster of the summer! Leave your reviews down below!
                   </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default NavBar