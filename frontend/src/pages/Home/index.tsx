import React from 'react'
import { useHistory } from 'react-router-dom'
import { isAuthenticated, logout } from '../../store/auth/token.service'

const Home = () => {
    const history = useHistory()
    const handleLogout = () => {
        logout()
        if(!isAuthenticated()){
            history.push('/')
        }
    }
    return (
        <div>
            <button onClick={handleLogout}>sair</button>
        </div>
    )
}

export default Home
