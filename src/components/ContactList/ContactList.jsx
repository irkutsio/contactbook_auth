import { Contact } from 'components/Contact/Contact';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';
import {
  selectError,
  selectIsloading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

export const ContactList = () => {
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (

      <>
        {isLoading && <Loader />}
        {error && <b>Please authenticate</b>}
        <ul>
          {contacts.map(({ id, name, number }) => {
            return <Contact name={name} number={number} id={id} key={id} />;
          })}
        </ul>
      </>

  );
};
