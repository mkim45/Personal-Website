import React from 'react';
import { Typography, Alert, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { Stack } from '@mui/system';


const Banner = ({ message }) => {

  const [showBanner, setShowBanner] = useState(true);

  const handleClose = () => {
    // Add code to hide the banner here
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <Alert variant="filled" sx = {{
        backgroundColor: "primary.main",
        color: '0',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 0,
        justifyContent: 'center',
        position: 'fixed',
        width: '100vw',
        marginTop: -2
    }}>
      <Stack direction='row'>
      <Typography variant="h6">
        {message} 
      </Typography>
      <IconButton
        onClick={handleClose}
        aria-label="close"
      >
        <CloseIcon color='white' sx={{
          marginLeft: "auto", marginRight: 0
        }} />
      </IconButton>
      </Stack>


    </Alert>
  );
};

export default Banner;