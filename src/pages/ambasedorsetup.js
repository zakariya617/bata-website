import { Box, Typography } from '@mui/material'
import React from 'react'
import Ambasedor from '../components/ambasedor'

const Ambasedorsetup = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: 'white', width: '100%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'20%',marginTop:'5%' }}>
    <Typography sx={{ fontWeight: 'bold', fontSize: '50px', color: 'BLACK',marginBottom:'5%' }}>OUR BELOVED PARTNER</Typography>
    <Box sx={{ height: '90%', width: '90%', marginLeft: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'5%' }}>
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/12_9bf180df-5e81-47ec-a603-6de0cb919776.png?v=1692694645&width=750'  />
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/8_49.png?v=1686631886&width=750'  />
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/9_1.png?v=1686631808&width=750' />
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/1_08de85cd-bec9-424e-8c6a-02a35bf8a30d.png?v=1686631914&width=750' />
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/2_1.png?v=1686725812&width=750' />
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/15_94c8c517-9034-4831-8241-3b125419bd93.png?v=1693206428&width=750' />
      
      
    </Box>
    <Box sx={{ height: '90%', width: '90%', marginLeft: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center',gap:'5%' }}>
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/7_1287a72f-48fc-4535-889b-a6bb2e76bc22.png?v=1693206456&width=750'  />
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/10_903c6d56-333b-47f8-ae48-19dbf59d11d7.png?v=1686632546&width=750'  />
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/14.png?v=1613707218&width=750' />
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/1_08de85cd-bec9-424e-8c6a-02a35bf8a30d.png?v=1686631914&width=750' />
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/5_9ac7745c-56fd-4c15-9971-3fa20c32cae3.png?v=1686632591&width=750' />
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/13_3818c185-add4-4a14-8063-d34f994031c1.png?v=1686632606&width=750' />
      <Ambasedor Image='https://www.bata.com.pk/cdn/shop/files/4_7a81350f-7535-4543-ab4b-ff849d7032aa.png?v=1686632624&width=750' />
      
      
    </Box>
    </Box>
  )
}

export default Ambasedorsetup
