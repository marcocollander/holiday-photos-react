import Section from '../../components/Section/Section';
import { data } from '../../data';

const AboutMe = () => {
	return (
		<Section
			className={'aboutMe'}
			title={	<a  className="aboutMe__link" href="https://raubuc.net">Zenon Marek Raubuć</a>}
			text={data[1].aboutMeDescription}
		>
		</Section>
	);
};

export default AboutMe;
