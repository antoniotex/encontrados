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
  showRegisterModal: boolean;
  showLoginModal: boolean;
}

const initialState: postProps = {
  posts: [],
  showRegisterModal: false,
  showLoginModal: false
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
    toggleRegisterModal(state, action){
      state.showRegisterModal = action.payload
    },
    toggleLoginModal(state, action){
      state.showLoginModal = action.payload
    },
  },
});

export const { updatePosts, updatePost, toggleLoginModal, toggleRegisterModal } = post.actions;
export default post.reducer;
