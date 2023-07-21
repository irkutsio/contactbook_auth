import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { FilterContainer } from './FilterInput.styled';

export const FilterInput = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value.toLocaleLowerCase()));
  };

  return (
    <FilterContainer>
      <h2>Contacts</h2>
      <TextField
        id="outlined-basic"
        label="Find Contact by name"
        variant="outlined"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </FilterContainer>
  );
};
