import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import authOperations from '../../redux/auth/authOperations';

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
      <Text>Please enter your registration details</Text>
      <FormControl as="form" onSubmit={handleSubmit}>
        <FormLabel htmlFor="input-register">
          Name
          <Input
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
        <FormLabel htmlFor="input-register-mail">
          Email
          <Input
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
        <FormLabel htmlFor="regPassword">
          Password
          <Input
            id="regPassword"
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </FormLabel>
        <Button type="submit">Register</Button>
      </FormControl>
    </Box>
  );
}
export default PageRegistration;
