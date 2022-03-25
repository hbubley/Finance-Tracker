
import { getAuth, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { LOGOUT } from '../context/types';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);
        try {
            const auth = getAuth();
            signOut(auth);
            if (!isCancelled) {
                setIsPending(false);
                dispatch({ type: LOGOUT })
            }
        } catch (err) {
            if (!isCancelled) {
                setError(err.message);
                setIsPending(false);
                console.error(err.message)
            }
        }
    }

    useEffect(() => {
        //cleanup functions only occur on unmount - component will unmount
        return () => setIsCancelled(true)
    }, [])
    return { error, isPending, logout }
}