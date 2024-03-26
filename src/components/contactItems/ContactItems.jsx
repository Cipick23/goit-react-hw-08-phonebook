import { Button, ListItem, Spinner } from '@chakra-ui/react';
import { useDeleteContactMutation } from '../../redux/tasks/contactsApi';
import styles from './ContactItems.module.css';

function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ListItem key={id} className={styles.listItem}>
      <p>
        {name}: {number}{' '}
      </p>
      <Button
        colorScheme="red"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? <Spinner size="sm" color="white" /> : 'Delete'}
      </Button>
    </ListItem>
  );
}

export default ContactItem;
