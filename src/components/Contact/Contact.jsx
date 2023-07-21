import PropTypes from 'prop-types';
import { UserContact, Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useState } from 'react';
import { BtnLoader } from 'components/Loader/Loader';
import { Button } from '@mui/material';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    dispatch(deleteContact(id))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  return (
    <UserContact key={id}>
      <Item>{name}</Item>
      <Item>{number}</Item>
      <Button
        variant="contained"
        type="button"
        onClick={handleDelete}
        disabled={loading}
      >
        Delete
        {loading && <BtnLoader />}
      </Button>
    </UserContact>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
