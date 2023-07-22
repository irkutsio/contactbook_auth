import { Route, Routes } from 'react-router-dom';
import { Registration } from '../pages/Registration/Registration';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';
import { ContactPage } from 'pages/Contacts/ContactPage';
import { SharedLayout } from './Layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { ResrtictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div style={{ padding: '36px' }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/registration"
            element={
              <ResrtictedRoute
                component={<Registration/>}
                redirectTo="/contacts"
              />
            }
          />

          <Route
            path="/login"
            element={
              <ResrtictedRoute component={<Login/>} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactPage/>} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
