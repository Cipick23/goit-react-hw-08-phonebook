import { Box } from '@chakra-ui/react';
import ContactForm from '../../components/contactForm/ContactForm';
import ContactList from '../../components/contactList/ContactList';
import Filter from '../../components/filter/Filter';

function PageContacts() {
  return (
    <Box>
      <h1>PHONEBOOK APP</h1>
      <h2>Add new contact</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Box>
  );
}

export default PageContacts;
