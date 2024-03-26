import { useSelector } from 'react-redux';
// import styles from './appBar.module.css';
import AuthForm from '../../components/authForm/AuthForm';
import { Box } from '@chakra-ui/react';
import UserMenu from '../userMenu/UserMenu';
import Navigation from '../navigation/Navigation';
import authSelectors from '../../redux/auth/authSelectors';
import { HelmetProvider } from 'react-helmet-async';
import styles from './appBar.module.css';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <HelmetProvider>
      <Box className={styles.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthForm />}
      </Box>
    </HelmetProvider>
  );
}

export default AppBar;
