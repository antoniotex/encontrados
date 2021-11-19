import { createSlice } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
}

interface Category {
  id: number;
  description: string;
}

interface Image {
  id: number;
  location: string;
  created_at: Date;
  updated_at: Date;
  post_id: number;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  user: User;
  category: Category;
  images: Image[];
}

interface postProps {
  posts: Post[];
  post?: Post;
}

const initialState: postProps = {
  posts: []
};

const post = createSlice({
  name: 'post',
  initialState,
  reducers: {
    updatePosts(state, action) {
      state.posts = action.payload;
    },
    updatePost(state, action) {
      state.post = action.payload;
    },
  },
});

export const { updatePosts, updatePost } = post.actions;
export default post.reducer;
