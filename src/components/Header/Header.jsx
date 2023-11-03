import hero from '../../images/heros.jpg';

const Header = () => {
	return (
		<div className='contianer'>
			<section className='hero'>
				<img
					className='hero__image'
					src={hero}
					alt=''
				/>
				<header
					className='hero__header'
					id='start'>
					<h1 className='hero__heading'>
						zdjęcia z<span> wczasów</span>
					</h1>
					<p className='hero__description'>
						Bardzo miłe fotki z wczasów krajowych,
						<span className='hero__span'>jak i z zagranicznych</span>
					</p>
				</header>
			</section>
		</div>
	);
};

export default Header;
