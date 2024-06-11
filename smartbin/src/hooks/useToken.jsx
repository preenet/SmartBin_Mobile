import {useEffect, useState} from 'react';

function useToken() {

    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || null
    })
    const [token, setToken] = useState(() => {
        return localStorage.getItem('token') || null;
    })

    const getUser = () => {
        if (!user && typeof window !== 'undefined') {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
        return user
    }

    const updateUser = (newUser) => {
        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
    }

    const getToken = () => {
        if (!token && typeof window !== 'undefined') {
            setToken(localStorage.getItem('token'))
        }
        return token
    }

    const updateToken = (newToken) => {
        setToken(newToken)
        localStorage.setItem('token', newToken)
    }

    const destroy = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    const reload = () => {
        if (typeof window !== 'undefined') {
            setToken(localStorage.getItem('token'))
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }

    return {
        updateToken,
        getToken,
        updateUser,
        getUser,
        destroy,
        reload
    }
}

export default useToken;