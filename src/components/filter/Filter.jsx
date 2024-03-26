import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/tasks/contactsSelectors';
import { FormLabel, Input } from '@chakra-ui/react';
import { filter } from '../../redux/tasks/contactsSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const onChangeFilter = evt => {
    dispatch(filter(evt.currentTarget.value.trim()));
  };
  return (
    <FormLabel htmlFor="searchName" value={filterName} className={styles.form}>
      <span className={styles.customStyle}>Find contacts by name</span>
      <Input
        className={styles.filterInput}
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
