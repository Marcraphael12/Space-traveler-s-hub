import './header.scss';
import Logo from '../..//images/planet.png';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header container">
    <div className="header__logo">
      <img className="header__logo-img" src={Logo} alt="logo" />
      <span className="header__logo-title">Space Travelers' Hub</span>
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
