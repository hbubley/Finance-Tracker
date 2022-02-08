import { createContext, useReducer } from 'react';
import { LOGIN } from './types';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch(action.type){
        case LOGIN:
            console.log("HERE")
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    })

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}