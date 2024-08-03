import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const NaveBar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'MEN', path: '/men' },
    { name: 'WOMEN', path: '/women' },
    { name: 'KIDS', path: '/kids' },
    { name: 'ACCESSORIES', path: '/accessories' },
    { name: 'BAGS' },
    { name: 'BATACLUB'}
  ];

  return (
    <Box sx={{ height: '14%', width: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'row', position: 'fixed', top: "0", right: '0', left: '0', zIndex: '9999' }}>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', gap: "25px", alignItems: 'center' }}>
        <Box sx={{ height: '70%', width: '60%', backgroundColor: 'white', marginTop: '2%', marginLeft: '1%' }}>
          <img
            src='https://cdn.shopify.com/s/files/1/0143/1552/0054/files/Bata-logo_1_493d53de-402c-4029-9c9f-09562279dd99.png?v=1694065416'
            alt="Logo"
            style={{ height: '50%', width: '100%' }}
          />
        </Box>

        {navItems.map((item) => (
          <Typography
            key={item.name}
            component={Link}
            to={item.path}
            sx={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: location.pathname === item.path ? 'black' : 'black',
              cursor: 'pointer',
              textDecoration: 'none',
              marginRight: '4%',
              padding: '5px 10px',
              border: location.pathname === item.path ? '2px solid red' : '2px solid transparent',
              borderRadius: '5px',
              ':hover': {
                color: 'red',
                borderColor: 'black'
              },
            }}
          >
            {item.name}
          </Typography>
        ))}

        <TextField
          id="search"
          label="Search...."
          variant="standard"
          size="large"
          sx={{ ml: 0, width: '95%', marginRight: '2%', borderColor: 'blue' }}
        />
      </Box>
    </Box>
  );
}

export default NaveBar;
