import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import authReducer from './auth/auth.store';

const store = configureStore({
  reducer: {
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
