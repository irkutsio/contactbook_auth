const getIsLoggedIn = state => state.auth.isLoggedIn;

const userName = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  userName,
};

export default authSelectors;
