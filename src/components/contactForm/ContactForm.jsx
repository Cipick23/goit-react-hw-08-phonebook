import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from '../../redux/tasks/contactsApi';
import Loader from '../loader/Loader';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts, isLoading } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContact = data => {
    const contactName = contacts.map(contact => contact.name.toLowerCase());
    const isAdding = contactName.includes(data.name.toLowerCase());
    if (!isAdding) {
      createContact(data);
      reset();
      toast.success(`😃 Contact, ${name} successfully added`);
    } else {
      toast.error(`😏${data.name} is already in contacts.`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    addContact(newContact);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormControl
      onSubmit={handleSubmit}
      autoComplete="on"
      className={styles.form}
    >
      <FormLabel htmlFor="addContact" className={styles.form}>
        Name
        <Input
          className={styles.filterInput}
          type="text"
          id="addContact"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name..."
          autoComplete="name"
          pattern="^[a-zA-Z]+(([' \-][a-zA-Z])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>

      <FormLabel htmlFor="number_input" className={styles.form}>
        Number
        <Input
          className={styles.filterInput}
          type="tel"
          id="number_input"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter your number..."
          autoComplete="tel"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>

      <Button type="submit" className={styles.formSubmitBtn}>
        Add contact
      </Button>
      <Toaster />
      {isLoading && <Loader />}
    </FormControl>
  );
}

export default ContactForm;
