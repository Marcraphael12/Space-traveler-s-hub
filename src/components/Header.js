import Logo from '../images/planet.png';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={Logo} alt="logo" />
      <span>Space Travelers' Hub</span>
    </div>
    <nav>
      <ul className="nav-items">
        <li>
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="missions">Missions</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
