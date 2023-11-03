import { NavLink, Routes, Route } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Header from '../Header/Header';
import AboutMe from '../../pages/AboutMe';
import Gallery from '../../pages/Gallery';
import Contact from '../../pages/Contact/Contact';
import { useState } from 'react';

const Navigation = () => {
	const [show, setShow] = useState('');
	const [hidden, setHidden] = useState('hidden');
	const [classIcon, setClassIcon] = useState('fa-solid fa-bars');
	const [flag, setFlag] = useState(true);

	const handleClick = () => {
		hidden ? setHidden('') : setHidden('hidden');
		!show ? setShow('show') : setShow('');
		flag ? setClassIcon('fa-solid fa-xmark') : setClassIcon('fa-solid fa-bars');
		flag ? setFlag(false) : setFlag('true');
	};

	return (
		<>
			<nav className='nav'>
				<Button
					onClick={handleClick}
					classIcon={classIcon}
				/>

				<ul className={`links ${show} ${hidden}`}>
					<li onClick={handleClick}>
						<NavLink
							className='links__item'
							to='/'>
							Start
						</NavLink>
					</li>
					<li onClick={handleClick}>
						<NavLink
							className='links__item'
							to='/aboutme'>
							AboutMe
						</NavLink>
					</li>
					<li onClick={handleClick}>
						<NavLink
							className='links__item'
							to='/gallery'>
							Galeria
						</NavLink>
					</li>

					<li onClick={handleClick}>
						<NavLink
							className='links__item'
							to='/contact'>
							Kontakt
						</NavLink>
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
