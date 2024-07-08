import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'
import AuthNav from '../AuthNav/AuthNav';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.navLinks}>
      <div className={styles.navLinksHoome}>
      <NavLink className={styles.link} to="/">Home</NavLink>
      <NavLink className={styles.link} to="/contacts">Contacts</NavLink>
      </div>
      {!isLoggedIn && <AuthNav />}
    </nav>
  );

};

export default Navigation;
