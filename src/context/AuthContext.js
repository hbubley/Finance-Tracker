import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useReducer, useEffect } from 'react';
import { LOGIN, LOGOUT, AUTH_IS_READY } from './types';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                user: null
            }
        case AUTH_IS_READY:
            return {
                ...state,
                user: action.payload,
                authIsReady: true,
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false,
    })

    useEffect(() => {
        const auth = getAuth()
        let isCancelled = false;
        const unsub = onAuthStateChanged(auth, (user) => {
            if (!isCancelled) {
                dispatch({ type: AUTH_IS_READY, payload: user })
            }
            unsub()
        })
        return () => isCancelled = true
    }, [])
    console.log('AuthContext State: ', state)
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}