import React from 'react';
import Box from '@mui/material/Box';

const Brands = ({ Image }) => {
  return (
    <Box sx={{ height: '100%', width: '70%' }}>
      <img src={Image} alt="Logo" style={{ height: '90%', width: '110%', }} />
    </Box>
  );
};

export default Brands;
