import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../models/Post';

interface PostProps {
    list: Post[];
    post?: Post
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
        },
        updatePost(state, action){
            state.post = action.payload
        }
    }
})

export const { updatePosts, updatePost } = post.actions;
export default post.reducer;
