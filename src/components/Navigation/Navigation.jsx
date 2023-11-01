import { NavLink, Routes, Route } from 'react-router-dom';
import Button from '../Button/Button';
import Header from '../Header/Header';
import AboutMe from '../../pages/AboutMe';
import Gallery from '../../pages/Gallery';
import Contact from '../../pages/Contact';
import {useState } from 'react';

const Navigation = () => {
 
  const [active, setActive] = useState('');
  const handleClick = () => (!active ? setActive('active') : setActive(''));
  
  return (
    <>
      <nav className='nav'>
        <Button onClick={handleClick} active />
        <div className={`links ${active}`}>
          <NavLink to='/'>Start</NavLink>
          <NavLink to='/aboutme'>AboutMe</NavLink>
          <NavLink to='/gallery'>Galeria</NavLink>
          <NavLink to='/contact'>Kontakt</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
};

export default Navigation;
