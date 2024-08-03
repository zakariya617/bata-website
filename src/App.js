import React from 'react';
import { Box } from '@mui/material';
import './App.css';
import Navebar from './pages/navebar';
import Bata from './pages/bata';
import Brandssetup from './pages/brandssetup';
import Photo from './pages/photo';
import Productsetup from './pages/productsetup';
import Shop from './pages/shop';
import Comfortsetup from './pages/comfortsetup';
import Ambasedorsetup from './pages/ambasedorsetup';
import Bataclub from './pages/bataclub';
import Bottom from './pages/bottom';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Men from './pages/men';
import Women from './pages/women';
import Kids from './pages/kids';
import Accessories from './pages/accessories';
import Sale from './pages/sale';

function App() {
  const location = useLocation();

  return (
    <Box sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <Navebar />
      <Routes>
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
       
      </Routes>
      {/* Conditional rendering for other components */}
      {location.pathname !== '/men' && 
       location.pathname !== '/women' && 
       location.pathname !== '/kids' && 
       location.pathname !== '/accessories' &&
  (
        <>
          <Bata />
          <Brandssetup />
          <Photo />
          <Productsetup />
          <Shop />
          <Comfortsetup />
          <Ambasedorsetup />
          <Bataclub />
          <Bottom />
        </>
      )}
    </Box>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
