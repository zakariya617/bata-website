import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Email, Place, Call } from '@mui/icons-material'; 

const Bottom = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', marginTop: '1%' }}>
      <Box sx={{ height: '70%', width: '100%', display: 'flex', backgroundColor: 'rgb(31,31,31)', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={{ height: '100%', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '80px' }}>
        <img
        src='https://cdn.shopify.com/s/files/1/0143/1552/0054/files/Bata-logo_1_493d53de-402c-4029-9c9f-09562279dd99.png?v=1694065416'
        alt="Logo"
        style={{ height: '40%', width: '40%' }}
      />
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold', color: 'rgb(145,147,149)', marginTop: '20px' }}>
            BATA Has The Best Shoes with soft and medicated soul.Since 1942 Bata Pakistan has been rendering its services to its valued customers by offering quality products.
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '0px', paddingRight: '0px' }}> {/* Added flexGrow and adjusted padding */}
          <Typography sx={{ fontSize: '25px', fontWeight: "bold", color: "white" }}>Products Categories</Typography>
          <ul style={{ listStyleType: 'initial', color: 'white' }}>
            <li><Typography variant="body1">MEN</Typography></li>
            <li><Typography variant="body1">WOMEN</Typography></li>
            <li><Typography variant="body1">KIDS</Typography></li>
            <li><Typography variant="body1">ACCESORIES</Typography></li>
            <li><Typography variant="body1">BAGS</Typography></li>
            <li><Typography variant="body1">SALE</Typography></li>
          </ul>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '0px', paddingRight: '0px' }}> {/* Added flexGrow and adjusted padding */}
          <Typography sx={{ fontSize: '25px', fontWeight: "bold", color: "white" }}>Contact Us</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}> 
            <IconButton color="primary">
              <Email /> 
            </IconButton>
            <Typography sx={{ fontSize: '14px', color: 'white', marginLeft: '5px' }}>contact@BATA.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}> 
            <IconButton color="primary">
              <Place /> 
            </IconButton>
            <Typography sx={{ fontSize: '14px', color: 'white', marginLeft: '5px' }}>  Karim Block Allama Iqbal Town, Lahore, Punjab </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}> 
            <IconButton color="primary">
              <Call /> 
            </IconButton>
            <Typography sx={{ fontSize: '14px', color: 'white', marginLeft: '5px' }}>0304-567549-8</Typography>
          </Box>
        </Box>
      </Box>

    
      <Box sx={{ backgroundColor: 'black', width: '100%', padding: '5px', textAlign: 'center', color: 'blueviolet' }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', }}>Coded by: DELTA CODERS</Typography>
        <Typography variant="body2" sx={{ marginTop: '5px', color: 'blueviolet' }}>© {currentYear} DELTA CODERS. All rights reserved.</Typography>
      </Box>

     
      <Box sx={{ backgroundColor: 'black', width: '100%', padding: '5px', textAlign: 'center', color: 'blueviolet' }}>
        <Typography variant="body2" sx={{ marginTop: '5px' }}>Terms of Use | Privacy Policy</Typography>
      </Box>
    </Box>
  );
}

export default Bottom;
