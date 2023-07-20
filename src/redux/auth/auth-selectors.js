const getIsLoggedIn = state => state.auth.isLoggedIn;

// const userEmail = state => state.auth.user.email;

export const selectUser = state => state.auth.user;

const authSelectors = {
  getIsLoggedIn,
//   userEmail,
  selectUser
};

export default authSelectors;
