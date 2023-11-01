const Header = () => {

  console.log('Renderujemy kompopnent Header');
  
  return (
    <>
      <header class='header' id='start'>
        <div class='hero-bg'></div>
        <div class='hero-text'>
          <h1>
            zdjęcia z<span> wczasów</span>
          </h1>
          <p>Bardzo miłe fotki z wczasów krajowych, jak i z zagranicznych</p>
        </div>
      </header>
    </>
  );
};

export default Header;
