import FormSubmit from './formSubmit/FormSubmit';
import Filter from './filter/Filter';
import React, { useEffect } from 'react';
import ContactList from './contactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactService';
import { selectError, selectIsLoading } from '../redux/selectors';
import { Box, Heading, Spinner } from '@chakra-ui/react';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        color: '#37cc57',
      }}
    >
      <Box>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Phonebook
        </Heading>
        {/* <h1></h1> */}
        <section>
          <FormSubmit />
          <h4>Contacts</h4>
          <Filter />
          {isLoading && !error && <Spinner color="red.500" />}
          <ContactList />
        </section>
      </Box>
    </div>
  );
};

export default App;
