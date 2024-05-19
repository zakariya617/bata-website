
import { Box } from '@mui/material'
import React from 'react'
import Comfort from '../components/comfort'

const Comfortsetup = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: 'white', width: '100%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20%', marginTop: '5%' }}>

      <Box sx={{ height: '90%', width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8%' }}>
        <Comfort Image='https://www.bata.com.pk/cdn/shop/files/SHELF_MARKER-867x392_ad82104c-ea18-458e-8fcb-c2329f65884c.jpg?v=1705907553&width=750' />
        <Comfort Image='https://www.bata.com.pk/cdn/shop/files/Ladies-Handbag-867x392_14c80907-ae6b-43b2-9ed4-2d230f259300.jpg?v=1705907482&width=750' />
       
      </Box>
      </Box>
  )
}

export default Comfortsetup
