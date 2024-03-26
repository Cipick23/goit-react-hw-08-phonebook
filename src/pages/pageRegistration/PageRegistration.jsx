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
import styles from './PageRegistration.module.css';

function PageRegistration() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ ...form }));
    setForm({ name: '', email: '', password: '' });
  };

  const { name, email, password } = form;

  return (
    <Box>
      <VStack spacing={4}>
        <Box as="h2" fontSize="xl" fontWeight="semibold">
          Please enter your registration details
        </Box>
        <Box onSubmit={handleSubmit}>
          <FormControl as="form" className={styles.form}>
            <FormLabel htmlFor="input-register" className={styles.form}>
              Name
              <Input
                className={styles.filterInput}
                type="text"
                name="name"
                autoComplete="name"
                id="input-register"
                pattern="^[a-zA-Z]+(([' \-][a-zA-Z])?[a-zA-Z]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces."
                placeholder="Example John"
                required
                value={name}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel htmlFor="input-register-mail" className={styles.form}>
              Email
              <Input
                className={styles.filterInput}
                type="email"
                id="input-register-mail"
                name="email"
                autoComplete="email"
                title="Enter your email"
                placeholder="Example user@mail.com"
                required
                value={email}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel htmlFor="regPassword" className={styles.form}>
              Password
              <Input
                className={styles.filterInput}
                id="regPassword"
                type="password"
                name="password"
                required
                value={password}
                onChange={handleChange}
              />
            </FormLabel>
            <Button type="submit" className={styles.formSubmitBtn}>
              Register
            </Button>
          </FormControl>
        </Box>
      </VStack>
    </Box>
  );
}
export default PageRegistration;
