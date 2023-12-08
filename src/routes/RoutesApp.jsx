import { Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Gallery from './pages/Gallery';
import GalleryCountry from './pages/GalleryCountry';
import Contact from './pages/Contact';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/gallery/:id' element={<GalleryCountry />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default RoutesApp;
