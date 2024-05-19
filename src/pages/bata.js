import { Box } from '@mui/material';
import React from 'react';


const Bata = () => {
  return (
    <Box sx={{ height: '70%', width: '120%' }}>
      <Box sx={{ height: '100%', width: '120%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <img 
          src='https://www.bata.com.pk/cdn/shop/files/style_banner_web_copy.jpg?v=1710152494&width=1500' 
          alt="Logo" 
          style={{ height: '100%', width: '70%' }}   
        />
      </Box>
    </Box>
  );
};

export default Bata;
