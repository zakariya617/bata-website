import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

const Kidssetup = ({ Image, Title, Description, Price }) => {
  const [value, setValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', backgroundColor: "WHITE", gap: '30px' }}>
      <Box sx={{ height: '90%', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '5%', marginTop: '3%', marginLeft: '7%' }}>
        <img
          src={Image}
          alt="Product"
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
          style={{
            height: '30%',
            width: '85%',
            borderRadius: '4%',
            transform: isHovered ? 'scaleX(-1)' : 'scaleX(1)', // Apply flip effect on hover
          }}
        />
        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', color: 'black' }}>{Title}</Typography>
        
      <Typography sx={{ fontWeight: 'bold', fontSize: '15px', color: 'black', marginTop: '10%' }}>{Price}</Typography>
      <Button variant="contained" disableElevation sx={{width:'50%',marginTop:'5%',backgroundColor:'red'}}>
  Add To Cart
</Button>
       
      </Box>
    </Box>
  );
};

export default Kidssetup;

