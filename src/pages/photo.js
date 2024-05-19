import { Box } from '@mui/material'
import React from 'react'

const Photo = () => {
  return (
    <Box sx={{ height: '70%', width: '100%' }}>
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',marginTop:'2%' }}>
      <img 
        src='https://www.bata.com.pk/cdn/shop/files/Peshawari_banner_web_copy.jpg?v=1711600310&width=1500' 
        alt="Logo" 
        style={{ height: '100%', width: '100%' }}   
      />
    </Box>
  </Box>
  )
}

export default Photo
