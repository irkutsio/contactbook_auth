import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import { Form } from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div>
          <TextField
            id="outlined-basic"
            label="Email address"
            variant="outlined"
            onChange={handleChange}
            value={email}
            name="email"
            type="email"
            style={{ marginBottom: 24, width: 300 }}
          />
        </div>

        <div>
          <TextField
            id="outlined-basic"
            label="Passwords"
            variant="outlined"
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
            style={{ marginBottom: 24, width: 300 }}
          />
        </div>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
};
