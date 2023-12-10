import imgUrl from '../../images/splash/heros.jpg';

const Splash = () => {
  const styleSection = {
    backgroundImage: `url(${imgUrl})`,
  };

  return (
    <>
      <section
        className='w-screen h-screen bg-cover bg-center'
        style={styleSection}
      ></section>
    </>
  );
};

export default Splash;
