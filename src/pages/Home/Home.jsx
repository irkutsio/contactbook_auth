import { useSelector } from 'react-redux';
import { HomeStyledLogIn, HomeStyledLogOut } from './Home.styled';
import authSelectors from 'redux/auth/auth-selectors';
import bgImg from 'img/bg_img.jpg'


export const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? (
    <HomeStyledLogIn><h1>Welcome to the contact book!</h1>
    <img src={bgImg} alt='wellcome_img' />
    </HomeStyledLogIn>
  ) : (
    <HomeStyledLogOut>
      <h1>Welcome to the contact book! Please Register or Log In↗</h1>
    </HomeStyledLogOut>
  );
};
