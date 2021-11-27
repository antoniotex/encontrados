import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../models/Post';

interface PostProps {
    list: Post[];
}

const initialState: PostProps = {
    list: []
}

const post = createSlice({
    name: 'post',
    initialState,
    reducers: {
        updatePosts(state, action){
            state.list = action.payload
        }
    }
})

export const { updatePosts } = post.actions;
export default post.reducer;
