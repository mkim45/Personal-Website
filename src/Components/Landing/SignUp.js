import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();

  const navigateNext = () => {
    navigate('/signup', {replace: true});
  }


  return (

    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: "#EDEAFB",
    }}>
      <Grid container sx={{
            paddingTop:"50px",
            paddingBottom:"50px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: {xs: '600px', sm: '600px', md: '1300px', lg: '1300px'},
            gap: { xs: '20px', sm: '20px', lg: '100px'},
      }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight={550}sx={{
            paddingBottom: '15px',
            textAlign: { xs: 'center', sm: 'center', md: 'right'},
            fontSize: '18px',
          }}>
        Hire the university talent that <span style={{color: '#482fd7'}}>you want.</span>
          </Typography>
          <Typography sx={{
                  opacity: '0.7',
                  fontSize: '16px',
                  textAlign: { xs: 'center', sm: 'center', md: 'right'},
                  
                }}>
            Learn more about clubs through descriptions and get in contact with club executives.          
            </Typography>
        </Grid>

        <Button onClick={navigateNext}
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            Sign Up
          </Button>


      </Grid>
    </Box>
  );
};

export default SignUp;