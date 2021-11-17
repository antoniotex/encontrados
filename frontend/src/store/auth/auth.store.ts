import { createSlice } from '@reduxjs/toolkit';

interface authProps {
  isAuthenticate: boolean;
}

const initialState: authProps = {
  isAuthenticate: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateLogin(state, action) {
      state.isAuthenticate = action.payload;
    },
  },
});

export const { updateLogin } = auth.actions;
export default auth.reducer;
