export const isUserLogin = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
export const getAuts = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
