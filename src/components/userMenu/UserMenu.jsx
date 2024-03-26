import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
// import logOut from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';
import styles from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Menu>
      <MenuButton as={Button} variant="ghost" className={styles.formSubmitBtn}>
        Welcome, {name}
      </MenuButton>
      <MenuList>
        <MenuGroup title="User Actions">
          <MenuItem
            onClick={() => dispatch(authOperations.logOut())}
            className={styles.formSubmitBtn}
          >
            Log Out
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default UserMenu;
