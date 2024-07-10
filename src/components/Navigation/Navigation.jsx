import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.navLinks}>
      <div className={styles.navLinksHoome}>
      <NavLink className={styles.link} to="/">Home</NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.link}>
          Contacts
        </NavLink>
      )}      </div>
    </nav>
  );

};

export default Navigation;
