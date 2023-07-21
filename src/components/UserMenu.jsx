import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import defaultAvatar from '../img/homer.png';
import { authOperations } from 'redux/auth/auth-operations';
import { Button, Chip } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(authSelectors.selectUser);

  const avatar = defaultAvatar;

  return (
    <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>
      <span>
        <img
          src={avatar}
          alt="avatar"
          width="42"
          style={{
            borderRadius: '50%',
            border: '1px solid grey',
            marginRight: 16,
          }}
        />
      </span>

      <Chip label={user.email} style={{ marginRight: 16 }}/>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        log out
      </Button>
    </div>
  );
};
