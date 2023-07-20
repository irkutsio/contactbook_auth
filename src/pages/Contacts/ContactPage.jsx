import { ContactList } from 'components/ContactList/ContactList';
import { FilterInput } from 'components/FilterInput/FilterInput';

const { ContactForm } = require('components/ContactForm/ContactForm');

export const ContactPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
     
      <FilterInput />
      <ContactList />
    </>
  );
};
