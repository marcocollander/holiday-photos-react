import { Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Gallery from './pages/Gallery';
import GalleryDetail from './pages/GalleryDetail';
import Contact from './pages/Contact';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/gallery/:id' element={<GalleryDetail />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default RoutesApp;
