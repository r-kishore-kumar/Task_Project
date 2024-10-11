// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', isAuthenticated: false },
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.name = '';
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
