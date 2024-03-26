import { Box } from '@chakra-ui/react';
import ContactForm from '../../components/contactForm/ContactForm';
import ContactList from '../../components/contactList/ContactList';
import Filter from '../../components/filter/Filter';
import styles from './PageContacts.module.css';

function PageContacts() {
  return (
    <Box className={styles.appContainer}>
      <Box
        as="h2"
        className={styles.heading}
        fontSize="xl"
        fontWeight="semibold"
      >
        PHONEBOOK APP
      </Box>
      <Box as="h2" fontSize="lg" className={styles.heading}>
        Add new contact
      </Box>
      <ContactForm />

      <Box as="h2" fontSize="lg" className={styles.heading}>
        Contacts
      </Box>
      <Filter />
      <ContactList />
    </Box>
  );
}

export default PageContacts;
