import { Dispatch } from "redux"
import api from "../../services/api"
import { setUser } from "./auth.store"

export const Authenticate = (data: any) => {
    return (dispatch: Dispatch) => {
        api.post('/users/authenticate', data).then((res: any) => {
            console.log(res.data)
        })
        .catch((error: any) => {
            console.log(error.response.data)
        })
    }
}
