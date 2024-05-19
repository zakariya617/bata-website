import React from 'react';
import { Box } from '@mui/material';
import Brands from '../components/brands';

const Brandssetup = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: 'white', width: '100%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20%', marginTop: '5%' }}>

      <Box sx={{ height: '90%', width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5%' }}>
        <Brands Image='https://www.bata.com.pk/cdn/shop/files/brand_banner_NS.jpg?v=1694147771&width=750' />
        <Brands Image='https://www.bata.com.pk/cdn/shop/files/power_1.jpg?v=1705902790&width=750' />
        <Brands Image='https://www.bata.com.pk/cdn/shop/files/brand-banner-we.jpg?v=1694147830&width=750' />
      </Box>

      <Box sx={{ height: '90%', width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2%', gap: '5%' }}>
        <Brands Image='https://www.bata.com.pk/cdn/shop/files/c1.jpg?v=1711961914&width=750' />
        <Brands Image='https://www.bata.com.pk/cdn/shop/files/brand-banner-red.jpg?v=1694147896&width=750' />
        <Brands Image='https://www.bata.com.pk/cdn/shop/files/BBG-1.jpg?v=1705902819&width=750' />
      </Box>

    </Box>
  );
}

export default Brandssetup;
