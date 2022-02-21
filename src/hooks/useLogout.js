import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';
import { LOGOUT } from '../context/types';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);
        const auth = getAuth();
        signOut(auth);
        setIsPending(false);
        dispatch({type: LOGOUT})
        //sign user out
        try {

        } catch (err) {
            setError(err.message);
            setIsPending(false);
            console.error(err.message)
        }
    }
    return {error, isPending, logout}
}