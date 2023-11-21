import hero from '../../images/heros.jpg';
import Section from '../Section/Section';
import { data } from '../../data';


const Splash = () => {
	const title = 'Tunezja 2023-08'
	return (
		<>
			<Section className={'splash'} title={title} text={data[0].splashDescription}>
				<img
					className='splash__image'
					src={hero}
					alt=''
				/>
			</Section>
		</>
	);
};

export default Splash;
