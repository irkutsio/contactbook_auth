import { Route, Routes} from 'react-router-dom';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { FilterInput } from './FilterInput/FilterInput';
import { Registration } from '../pages/Registration/Registration';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';
import { ContactPage } from 'pages/Contacts/ContactPage';
import { SharedLayout } from './Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
// import { contactsReducer } from 'redux/contactsSlice';

export const App = () => {

const dispatch = useDispatch()

useEffect(()=>{
  dispatch(authOperations.fetchCurrentUser())
},[dispatch])

  return (
    <div style={{ padding: '36px' }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<ContactPage />} />
          {/* <PrivateRoute path="/contacts">
            <ContactPage />
          </PrivateRoute> */}
        </Route>
      </Routes>
    </div>
  );
};
