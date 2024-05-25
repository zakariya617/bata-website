import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

const NaveBar = () => {
  return (
    <Box sx={{ height: '14%', width: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'row', position: 'fixed', top: "0", right: '0', left: '0', zIndex: '9999' }}>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', gap: "37px", alignItems: 'center' }}>
        <Box sx={{ height: '70%', width: '60%', backgroundColor: 'white', marginTop: '2%', marginLeft: '2%' }}>
          <img
            src='https://cdn.shopify.com/s/files/1/0143/1552/0054/files/Bata-logo_1_493d53de-402c-4029-9c9f-09562279dd99.png?v=1694065416'
            alt="Logo"
            style={{ height: '50%', width: '97%' }}
          />
        </Box>
       
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black', cursor: 'pointer', marginRight: '2%' }}>MEN</Typography>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black', cursor: 'pointer', marginRight: '2%' }} >WOMEN</Typography>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black', cursor: 'pointer', marginRight: '2%' }} >KIDS</Typography>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black', cursor: 'pointer', marginRight: '2%' }} >ACCESORIES</Typography>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black', cursor: 'pointer', marginRight: '2%' }} >BAGS</Typography>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black', cursor: 'pointer', marginRight: '2%' }} >BATACLUB</Typography>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black', cursor: 'pointer', marginRight: '2%' }} >SALE</Typography>
        
        <TextField
          id="search"
          label="Search...."
          variant="standard"
          size="large"
          sx={{ ml: 0,width:'95%',marginRight:'2%',borderColor:'blue'}}
        />
      </Box>
      

    </Box>
  );
}

export default NaveBar;

