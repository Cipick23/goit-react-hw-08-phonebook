import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/tasks/contactsSelectors';
import { FormLabel, Input } from '@chakra-ui/react';
import { filter } from '../../redux/tasks/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const onChangeFilter = evt => {
    dispatch(filter(evt.currentTarget.value.trim()));
  };
  return (
    <FormLabel htmlFor="searchName" value={filterName}>
      <span
        style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}
      >
        Find contacts by name
      </span>
      <Input
        id="searchName"
        type="text"
        autoComplete="name"
        value={filterName}
        onChange={onChangeFilter}
        placeholder="Enter search name"
      />
    </FormLabel>
  );
};

export default Filter;
