import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3002/api',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signup = async data => {
  const { data: rezult } = await instance.post('/auth/register', data);
  // const { data: rezult } = await instance.post('/users/signup', data);
  setToken(rezult.token);
  return rezult;
};

export const login = async data => {
  const { data: rezult } = await instance.post('/auth/login', data);
  // const { data: rezult } = await instance.post('/users/login', data);
  setToken(rezult.token);
  return rezult;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/auth/current');
    // const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post('/auth/logout');
  // const { data } = await instance.post('/users/logout');
  setToken();
  return data;
};

export default instance;
