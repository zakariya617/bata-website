import React, { useState } from 'react';
import Box from '@mui/material/Box';

const Brands = ({ Image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box sx={{ height: '100%', width: '70%' }}>
      <img 
        src={Image} 
        alt="Logo" 
        style={{ 
          height: '90%', 
          width: '100%', 
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </Box>
  );
};

export default Brands;
