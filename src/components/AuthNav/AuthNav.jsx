import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <div className={styles.navLinks}>
      <NavLink className={styles.link} to="/register">Register</NavLink>
      <NavLink className={styles.link} to="/login">Login</NavLink>
    </div>
  );
};

export default AuthNav;
