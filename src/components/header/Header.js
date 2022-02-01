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
      <ul className="header__nav-items">
        <li className="header__nav-item">
          <NavLink className="header__nav-link" to="/">
            Rockets
          </NavLink>
        </li>
        <li className="header__nav-item header__nav-item--br">
          <NavLink className="header__nav-link" to="missions">
            Missions
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink className="header__nav-link" to="my-profile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
