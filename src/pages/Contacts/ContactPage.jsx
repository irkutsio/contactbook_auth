import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { FilterInput } from 'components/FilterInput/FilterInput';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsloading } from 'redux/contacts/selectors';

export const ContactPage = () => {
  const isLoading = useSelector(selectIsloading);

  return (
    <>
      {isLoading && <Loader />}

      <ContactForm />
        <FilterInput />
        <ContactList />

    </>
  );
};
