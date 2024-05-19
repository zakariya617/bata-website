
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




function App() {
  return (
   <Box sx={{height:'100%',width:'100%',overflow:'hidden'}}>
   <Navebar/>
   <Bata/>
   <Brandssetup/>
   <Photo/>
   <Productsetup/>
   <Shop/>
   <Comfortsetup/>
   <Ambasedorsetup/>
   <Bataclub/>
  <Bottom/>

   </Box>
  );
}

export default App;
