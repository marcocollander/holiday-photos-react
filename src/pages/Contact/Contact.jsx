import swan from '../../images/swan_640.jpg';
import Section from '../../components/Section/Section';

const Contact = () => {
	return (
		<Section
			className={'contact'}
			title={'Kontakt'}>
			<img
				src={swan}
				alt='łabędź'
			/>

			<p className='contact__description'>
				<i className='fas fa-phone'>780 026 241</i>
				<i className='fas fa-envelope'>m.raubuc@wp.pl</i>
			</p>
			<div className='contact__address'>
				<h3>Adres</h3>
				<p>ul. Kwaśna 4</p>
				<p>53-425 Wrocław</p>
			</div>
		</Section>
	);
};

export default Contact;
