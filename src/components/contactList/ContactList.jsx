import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/tasks/contactsApi';
import { getFilter } from '../../redux/tasks/contactsSelectors';
import Loader from '../loader/Loader';
import { FormErrorMessage, List } from '@chakra-ui/react';
import ContactItems from 'components/contactItems';
// import styles from './ContactList.module.css';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();

  const filter = useSelector(getFilter);

  const filterContacts = () => {
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const contactList = filterContacts();
  const renderContacts = contacts && contactList.length > 0;

  return (
    <section>
      <List>
        {renderContacts &&
          contactList.map(({ id, name, number }) => (
            <ContactItems id={id} key={id} name={name} number={number} />
          ))}
        {isLoading && <Loader />}
        {error && (
          <FormErrorMessage>
            Try adding phone details or contact your administrator
          </FormErrorMessage>
        )}
      </List>
    </section>
  );
};

export default ContactList;
