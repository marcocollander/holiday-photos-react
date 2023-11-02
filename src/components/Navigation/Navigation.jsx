import { NavLink, Routes, Route } from 'react-router-dom';
import Button from '../Button/Button';
import Header from '../Header/Header';
import AboutMe from '../../pages/AboutMe';
import Gallery from '../../pages/Gallery';
import Contact from '../../pages/Contact';
import { useState } from 'react';

const Navigation = () => {
  const [active, setActive] = useState('');
  const [hidden, setHidden] = useState('hidden');
  const [burgerIcon, setBurgerIcon] = useState('fas fa-bars');
  const handleClick = () => {
    !active ? setActive('show') : setActive('');
    hidden ? setHidden('') : setHidden('hidden');
    burgerIcon ? setBurgerIcon('') : setBurgerIcon('fas fa-bars');
  };

  return (
    <>
      <nav className='nav'>
        <Button classNameIcon={burgerIcon}
          onClick={handleClick}
        />
        <ul className={`links ${active} ${hidden}`}>
          <li onClick={handleClick}>
            <NavLink to='/'>Start</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to='/aboutme'>AboutMe</NavLink>
          </li>
          <li>
            <NavLink to='/gallery'>Galeria</NavLink>
          </li>

          <li>
            <NavLink to='/contact'>Kontakt</NavLink>
          </li>
        </ul>
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
<li></li>;

export default Navigation;
