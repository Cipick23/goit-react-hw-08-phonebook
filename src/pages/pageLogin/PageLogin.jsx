import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import authOperations from '../../redux/auth/authOperations';
import styles from './PageLogin.module.css';

function PageLogin() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ ...form }));
    setForm({ email: '', password: '' });
  };

  const { email, password } = form;

  return (
    <Box>
      <VStack spacing={4}>
        <Box as="h2" fontSize="xl" fontWeight="semibold">
          Please enter your email and password
        </Box>
        <Box onSubmit={handleSubmit}>
          <FormControl className={styles.form}>
            <FormLabel htmlFor="loginMail" className={styles.form}>
              Email
            </FormLabel>
            <Input
              className={styles.filterInput}
              id="loginMail"
              type="email"
              name="email"
              autoComplete="email"
              title="Enter your email"
              placeholder="Example user@mail.com"
              required
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="loginPassword" className={styles.form}>
              Password
            </FormLabel>
            <Input
              className={styles.filterInput}
              id="loginPassword"
              type="password"
              name="password"
              title="Enter your password"
              required
              value={password}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            type="submit"
            className={styles.formSubmitBtn}
          >
            Log In
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default PageLogin;
