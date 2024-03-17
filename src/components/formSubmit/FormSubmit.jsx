import React from 'react';
import { useDispatch } from 'react-redux';
import css from './FormSubmit.module.css';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { addContact } from '../../redux/tasks/contactService';

const FormSubmit = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      addContact({
        name: form.elements.name.value,
        phone: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <Container className={css.formFlex} onSubmit={handleSubmit}>
      <FormControl className={css.form}>
        <FormLabel className={css.contactForm__label} htmlFor="name">
          Name
        </FormLabel>
        <Input
          className={css.filterInput}
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' \-][a-zA-Z])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormControl>

      <FormControl className={css.form}>
        <FormLabel className={css.contactForm__label} htmlFor="number">
          Number
        </FormLabel>
        <Input
          className={css.filterInput}
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormControl>

      <FormControl className={css.form}>
        <Button className={css.formSubmitBtn} type="submit">
          Add Contact
        </Button>
      </FormControl>
    </Container>
  );
};

export default FormSubmit;
