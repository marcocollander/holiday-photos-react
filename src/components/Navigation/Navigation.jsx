import Button from '../../components/Button/Button';
import LinkApp from '../../components/LinkApp/LinkApp';
import { useState } from 'react';

const Navigation = () => {
  const [show, setShow] = useState('');
  const [hidden, setHidden] = useState('hidden');
  const [classIcon, setClassIcon] = useState('fa-solid fa-bars');
  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    hidden ? setHidden('') : setHidden('hidden');
    !show ? setShow('show') : setShow('');
    flag ? setClassIcon('fa-solid fa-xmark') : setClassIcon('fa-solid fa-bars');
    flag ? setFlag(false) : setFlag(true);
  };

  const urls = ['/', '/aboutme', '/gallery', '/contact'];
  const names = ['Start', 'O mnie', 'Galeria', 'Kontakt'];

  return (
    <>
      <nav className="nav">
        <Button onClick={handleClick} classIcon={classIcon} />

        <ul className={`links ${show} ${hidden}`}>
          {names.map((item, index) => (
            <LinkApp
              key={index}
              onClick={handleClick}
              name={item}
              url={urls[index]}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
