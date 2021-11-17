import { Dispatch } from "redux"
import encontradosAPI from "../../services/encontradosAPI";

export const asyncGetAllPosts = () => {
    return (dispatch: Dispatch) => {
        encontradosAPI.get('/posts').then((res: any) => {
        })
        .catch((error: any) => {
            console.log(error)
        })
    }
}

export const asyncLogin = async (data: any) => {
    try {
        const response = await encontradosAPI.post('/users/authenticate', data)
        return response
    } catch (error: any) {
        console.log('ERROR: ', error.response.data)
        alert(error.response.data.msg)
        
    }
}