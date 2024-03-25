import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" exact="true" className={styles.link}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" exact="true" className={styles.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
