import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import defaultAvatar from '../img/homer.png'
import { authOperations } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(authSelectors.selectUser);

  const avatar = defaultAvatar;

  return (
    <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>
      <span>
        <img src={avatar} alt="avatar" width="42" style={{borderRadius : '50%', border: '1px solid grey', marginRight: 16,}}/>
      </span>
      <p style={{margin: 0, marginRight: 16}}> {user.email}</p>
      <button onClick={()=>{dispatch(authOperations.logOut())}}>log out</button>
    </div>
  );
};
