import { NavLink } from 'react-router-dom';

const LinkApp = ({ url, name, ...props }) => {
  return (
    <li {...props}>
      <NavLink
        className='text-white'
        to={url}
        style={({ isActive }) =>
          isActive ? { fontWeight: 'bold' } : undefined
        }
      >
        {name}
      </NavLink>
    </li>
  );
};

export default LinkApp;
