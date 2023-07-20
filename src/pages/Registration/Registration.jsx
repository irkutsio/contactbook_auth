import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import toast, { Toaster } from 'react-hot-toast';


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

if(password.length < 7) {
  toast.error('password should be longer then 6 simbols')
  return;
}

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <Toaster/>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            width: 400,
            backgroundColor: 'beige',
            padding: 16,
            borderRadius: 8,
            border: '2px solid red',
          }}
        >
          <h1>Registration</h1>
          <div>
            {' '}
            <label>Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={name}
              style={{ marginBottom: 24, marginLeft: 16 }}
            />
          </div>

          <div>
            {' '}
            <label>Email address</label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={email}
              style={{ marginBottom: 24, marginLeft: 16 }}
            />
          </div>

          <div>
            {' '}
            <label>Passwords</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={password}
              style={{ marginBottom: 24, marginLeft: 16 }}
            />
          </div>
          <button type="submit">Registration</button>
        </div>
      </form>
    </>
  );
};
