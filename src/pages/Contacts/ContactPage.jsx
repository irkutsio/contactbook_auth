import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { FilterInput } from 'components/FilterInput/FilterInput';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsloading } from 'redux/contacts/selectors';
// import toast, { Toaster } from 'react-hot-toast';
// import { useEffect } from 'react';import { useSelector } from 'react-redux';
// import authSelectors from 'redux/auth/auth-selectors';

export const ContactPage = () => {
  const isLoading = useSelector(selectIsloading);

  return (
    <>
      {isLoading && <Loader />}
      <h1>Phonebook</h1>
      <ContactForm />
      <FilterInput />
      <ContactList />
    </>
  );
};
