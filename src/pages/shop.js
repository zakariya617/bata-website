import { Box } from '@mui/material'
import React from 'react'

const Shop = () => {
  return (
    <Box sx={{ height: '70%', width: '100%' }}>
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',marginTop:'2%' }}>
      <img 
        src='https://www.bata.com.pk/cdn/shop/files/Comfit_banner_web_2_copy.jpg?v=1711600252&width=1500' 
        alt="Logo" 
        style={{ height: '100%', width: '100%' }}   
      />
    </Box>
  </Box>
  )
}

export default Shop
