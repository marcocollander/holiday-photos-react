import { NavLink } from "react-router-dom"

const LinkApp = ({url, name, ...props}) => {
  return (
    <li {...props}>
    <NavLink
      className='links__item'
      to={url}>
      {name}
    </NavLink>
  </li>
  )
}

export default LinkApp    