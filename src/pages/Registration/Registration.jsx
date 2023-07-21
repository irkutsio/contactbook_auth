import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import toast, { Toaster } from 'react-hot-toast';
import { Button, TextField } from '@mui/material';
import { Form } from 'pages/Login/Login.styled';

export const Registration = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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

    if (password.length < 7) {
      toast.error('password should be longer then 6 simbols');
      return;
    }

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Toaster />
      <Form>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Registration</h1>
            <div>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={handleChange}
                type="text"
                name="name"
                value={name}
                style={{ marginBottom: 24, width: 300 }}
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Email address"
                variant="outlined"
                type="email"
                onChange={handleChange}
                name="email"
                value={email}
                style={{ marginBottom: 24 , width: 300}}
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Passwords"
                variant="outlined"
                onChange={handleChange}
                type="password"
                name="password"
                value={password}
                style={{ marginBottom: 24, width: 300 }}
              />
            </div>
            <Button variant="contained" type="submit">
              Registration
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
