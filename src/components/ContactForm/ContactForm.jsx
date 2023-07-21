import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Button, TextField } from '@mui/material';
import { Form } from './ContactForm.style';


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;
    const oldContact = contacts.find(contact => contact.name === name.value);

    if (oldContact) {
      toast.error('Sorry, you have contact with such name');
      e.target.reset();
      return;
    }

    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };
    e.target.reset();
    dispatch(addContact(contact));
  };

  return (
    <>
      <Toaster />

      <Form onSubmit={handleSubmit} >
      <h1>Phonebook</h1>
        <div>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            style={{ marginBottom: 24 }}
          />
        </div>
        <Button variant="contained" type="submit">
          Add Contact
        </Button>
      </Form>

    </>
  );
};
