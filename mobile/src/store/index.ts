import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import postReducer from './post/post.store';

const store = configureStore({
  reducer: {
    post: postReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
