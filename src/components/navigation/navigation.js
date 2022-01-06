import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';
const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navigation;
