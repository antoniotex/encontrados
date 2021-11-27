import { Dispatch } from "redux"
import api from "../../services/api"
import { updatePosts } from "./post.store"

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
