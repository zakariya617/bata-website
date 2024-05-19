import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const Bataclub = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: 'rgb(234, 235, 230)', width: '100%', marginTop: '5%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src='https://bataclub.bata.com.co/img/BATA_CLUB_LOGO_NEW-web.png' 
            alt="Logo" 
            style={{ height: '20%', width: '25%', marginTop: '5%' }}   
          />
          <TextField
            id="email"
            label="Email Address"
            variant="outlined"
            size="large"
            sx={{ width: '100%', marginTop: '3%' }}
          />
          <Button variant="contained" color="error" size="large" sx={{ width: '20%', marginTop: '3%' }}>
            Join Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Bataclub;
