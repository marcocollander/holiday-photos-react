import LinkApp from './LinkApp';

const Navigation = ({ active, onClick }) => {
  const urls = ['/', '/gallery', '/contact'];
  const names = ['Strona główna', 'Galeria', 'Kontakt'];
  let nav = active ? 'active' : 'no-active';

  return (
    <>
      <nav className={`${nav}`}>
        <ul className='flex flex-col h-[20vh] justify-evenly items-center bg-orange-600 top-20'>
          {names.map((item, index) => (
            <LinkApp
              key={index}
              name={item}
              url={urls[index]}
              onClick={onClick}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
