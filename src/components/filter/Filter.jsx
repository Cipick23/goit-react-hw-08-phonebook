import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setContactsFilter } from '../../redux/contactsFilterSlice';
import { selectContactsFilter } from '../../redux/selectors';
import { FormControl, Input } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const filterChangeHandler = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <h4>Find contacts by name:</h4>
      <FormControl>
        <Input
          className={css.filterInput}
          id="filter"
          value={filter}
          onChange={filterChangeHandler}
          type="text"
          placeholder="Search by name"
          name="filter"
          pattern="^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(([' \-][a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż])?[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormControl>
    </div>
  );
};

export default Filter;
