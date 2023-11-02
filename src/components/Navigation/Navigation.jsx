import { NavLink, Routes, Route } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Header from '../Header/Header';
import AboutMe from '../../pages/AboutMe';
import Gallery from '../../pages/Gallery';
import Contact from '../../pages/Contact/Contact';
import { useState } from 'react';

const Navigation = () => {
	const [active, setActive] = useState('');
	const [hidden, setHidden] = useState('hidden');
	const [classIcon, setClassIcon] = useState('fas fa-bars');
	const [flag, setFlag] = useState(true);

	const handleClick = e => {
		!active ? setActive('show') : setActive('');
		hidden ? setHidden('') : setHidden('hidden');
		flag ? setClassIcon('fas fa-times') : setClassIcon('fas fa-bars');
    flag ? setFlag(false) : setFlag('true')
	};

	return  (console.log(flag),
		<>
			<nav className='nav'>
				<Button
					onClick={handleClick}
					classIcon={classIcon}
				/>

				<ul className={`links ${active} ${hidden}`}>
					<li onClick={handleClick}>
						<NavLink to='/'>Start</NavLink>
					</li>
					<li onClick={handleClick}>
						<NavLink to='/aboutme'>AboutMe</NavLink>
					</li>
					<li onClick={handleClick}>
						<NavLink to='/gallery'>Galeria</NavLink>
					</li>

					<li onClick={handleClick}>
						<NavLink to='/contact'>Kontakt</NavLink>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route
					path='/'
					element={<Header />}
				/>
				<Route
					path='/aboutme'
					element={<AboutMe />}
				/>
				<Route
					path='/gallery'
					element={<Gallery />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
			</Routes>
		</>
	);
};
<li></li>;

export default Navigation;
