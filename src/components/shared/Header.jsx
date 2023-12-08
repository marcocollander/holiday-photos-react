import Button from './Button';

const Header = ({ onClick, active }) => {
  return (
    <>
      <header className='flex justify-evenly items-center w-full py-3 bg-gray-950 text-white'>
        <h1 className='text-xl uppercase tracking-widest'>Nasze wczasy</h1>
      </header>
      <Button onClick={onClick} active={active} />
    </>
  );
};

export default Header;
