import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const images = [
  'https://www.bata.com.pk/cdn/shop/files/style_banner_web_copy.jpg?v=1710152494&width=1500',
  'https://www.bata.com.pk/cdn/shop/files/50_-2.jpg?v=1717397344&width=1500',


  // Add more image URLs as needed
];

const Bata = () => {
  return (
    // <Box sx={{ height: '70%', width: '90%' , backgroundColor:'pink'}}>
      <Box sx={{ height: '100%', width: '120%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Carousel autoPlay={true} interval={1500} animation="fade">
          {images.map((src, index) => (
            <Box key={index} sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <img 
                src={src} 
                alt={`Slide ${index}`} 
                style={{ height: '100%', width: '100%' }}   
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    // </Box>
  );
};

export default Bata;
