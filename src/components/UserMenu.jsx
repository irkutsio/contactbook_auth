import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import defaultAvatar from './img/4143866.jpg';
import { authOperations } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(authSelectors.selectUser);
//   console.log(user.email)

  const avatar = defaultAvatar;

  return (
    <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>
      <span>
        <img src={avatar} alt="avatar" width="32" style={{borderRadius : '50%'}}/>
      </span>
      <p style={{margin: 0}}> {user.email}</p>
      <button onClick={()=>{dispatch(authOperations.logOut())}}>log out</button>
    </div>
  );
};
