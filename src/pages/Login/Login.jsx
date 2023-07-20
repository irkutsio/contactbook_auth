import {  useState } from 'react';
import { useDispatch} from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';

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
    <>

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
          <h1>Login</h1>

          <div>
            <label>Email address</label>
            <input
              onChange={handleChange}
              value={email}
              name="email"
              style={{ marginBottom: 24, marginLeft: 16 }}
            />
          </div>

          <div>
            <label>Passwords</label>
            <input
              value={password}
              onChange={handleChange}
              type="password"
              name="password"
              style={{ marginBottom: 24, marginLeft: 16 }}
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};
