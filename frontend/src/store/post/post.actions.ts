import { Dispatch } from "redux"
import encontradosAPI from "../../services/encontradosAPI";
import { updatePosts } from "./post.store";

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