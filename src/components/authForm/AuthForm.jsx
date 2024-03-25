import { NavLink } from 'react-router-dom';
import styles from './AuthForm.module.css';

function AuthForm() {
  return (
    <nav>
      <NavLink className={styles.link} to="/register" exact="true">
        Sign up
      </NavLink>
      <NavLink className={styles.link} to="/login" exact="true">
        Log in
      </NavLink>
    </nav>
  );
}
export default AuthForm;
