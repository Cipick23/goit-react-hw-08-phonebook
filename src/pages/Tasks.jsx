import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import FormSubmit from 'components/formSubmit/FormSubmit';
import ContactList from 'components/contactList/ContactList';
import { selectIsLoading } from '../redux/tasks/selectors';
import { fetchContacts } from '../redux/tasks/contactService';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <FormSubmit />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
