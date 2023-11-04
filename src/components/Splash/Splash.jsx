import hero from '../../images/heros.jpg';
import Section from '../Section/Section';
import { splash } from '../../data';


const Splash = () => {
	return (
		<>
			<Section className={'splash'} title={'Sidi Bou Said Tunezja 2023-08'} text={splash.description}>
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
