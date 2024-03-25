import { Button, ListItem, Spinner } from '@chakra-ui/react';
import { useDeleteContactMutation } from '../../redux/tasks/contactsApi';

function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ListItem
      key={id}
      borderWidth="1px"
      borderRadius="md"
      p="4"
      mb="2"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
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
