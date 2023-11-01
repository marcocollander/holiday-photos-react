import { Link, Routes, Route } from 'react-router-dom';
import Button from '../Button/Button';
import Header from '../Header/Header';
import AboutMe from '../../pages/AboutMe';
import {useState } from 'react';

const Navigation = () => {
 
  console.log('Renderowanie Navigation');
  const [active, setActive] = useState('');
  const handleClick = () => (!active ? setActive('active') : setActive(''));
  
  return (
    <>
      <nav className='nav'>
        <Button onClick={handleClick} active />
        <div className={`links ${active}`}>
          <Link to='/'>Start</Link>
          <Link to='/aboutme'>AboutMe</Link>
          <Link to='#gallery'>Galeria</Link>
          <Link
            to='https://blog.raubuc.net'
            target='_blank'
            rel='noopener noreferrer'
          >
            Blog
          </Link>
          <Link to='#contact'>Kontakt</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/aboutme' element={<AboutMe />} />
      </Routes>
    </>
  );
};

export default Navigation;
