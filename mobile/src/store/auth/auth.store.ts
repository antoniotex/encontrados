import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/Post';

interface AuthProps {
    user?: User;
}

const initialState: AuthProps = {
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action){
            state.user = action.payload
        }
    }
})

export const { setUser } = auth.actions;
export default auth.reducer;
