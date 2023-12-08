import Navigation from './Navigation';
import Header from './Header';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <>
      <Header onClick={handleClick} active={isActive} />
      <Navigation active={isActive} onClick={handleClick} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
