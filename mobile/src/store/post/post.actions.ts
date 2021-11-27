import { Dispatch } from "redux"
import api from "../../services/api"
import { updatePost, updatePosts } from "./post.store"

export const getPosts = () => {
    return (dispatch: Dispatch) => {
        api.get('/posts').then((res: any) => {
            dispatch(updatePosts(res.data))
        })
        .catch((error: any) => {
            console.log(error.response)
        })
    }
}

export const getPostById = (postId: number) => {
    return (dispatch: Dispatch) => {
        api.get(`/posts/${postId}`).then((res: any) => {
            dispatch(updatePost(res.data))
        })
        .catch((error: any) => {
            console.log(error.response)
        })
    }
}
