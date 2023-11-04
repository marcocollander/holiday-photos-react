import { Routes, Route } from 'react-router-dom';
import Splash from '../components/Splash/Splash';
import AboutMe from '../pages/AboutMe/AboutMe';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact/Contact';

const RoutesApp = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Splash />}
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
	);
};

export default RoutesApp;
