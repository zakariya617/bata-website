import { Box } from '@mui/material'
import React from 'react'

const Comfort = ({Image}) => {
  return (
    <Box sx={{ height: '100%', width: '70%' }}>
      <img src={Image} alt="Logo" style={{ height: '90%', width: '110%', }} />
    </Box>
  )
}

export default Comfort
