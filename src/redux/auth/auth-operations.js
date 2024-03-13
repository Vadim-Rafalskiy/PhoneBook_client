import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import * as api from '../../shared/servises/auth-api';

export const signup = createAsyncThunk('auth/signup', async (data, { rejectWithValue }) => {
  try {
    const result = await api.signup(data);
    toast.success('Successfully signed up', { position: 'bottom-right' });
    return result;
  } catch ({ response }) {
    toast.error(response.data.message, { position: 'bottom-right' });

    return rejectWithValue(response.data.message);
  }
});

export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  try {
    const result = await api.login(data);
    return result;
  } catch ({ response }) {
    toast.error(response.data.message);
    return rejectWithValue(response.data.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const data = await api.logout();
    return data;
  } catch ({ response }) {
    toast.error(response.data.message);
    return rejectWithValue(response.data.message);
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ response }) {
      toast.error(response.data.message);
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
