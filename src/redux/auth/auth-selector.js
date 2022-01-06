const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUseremail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUseremail,
};

export default authSelectors;
