import { Dispatch } from "redux"
import encontradosAPI from "../../services/encontradosAPI";
import { updatePost, updatePosts } from "./post.store";

export const asyncGetAllPosts = () => {
    return (dispatch: Dispatch) => {
        encontradosAPI.get('/posts').then((res: any) => {
            dispatch(updatePosts(res.data))
        })
        .catch((error: any) => {
            console.log('ERROR: ', error.response.data)
            alert(error.response.data.msg)
        })
    }
}

export const asyncGetPostById = (id: number) => {
    return (dispatch: Dispatch) => {
        encontradosAPI.get(`/posts/${id}`).then((res: any) => {
            dispatch(updatePost(res.data))
        })
        .catch((error: any) => {
            console.log('ERROR: ', error.response.data)
            alert(error.response.data.msg)
        })
    }
}