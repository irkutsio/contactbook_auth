import { Route, Routes, NavLink } from 'react-router-dom';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { FilterInput } from './FilterInput/FilterInput';
import { Registration } from '../pages/Registration/Registration';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';
import { ContactPage } from 'pages/Contacts/ContactPage';
import { SharedLayout } from './Layout';
// import { contactsReducer } from 'redux/contactsSlice';

export const App = () => {
  return (
    <div style={{ padding: '36px' }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
};
