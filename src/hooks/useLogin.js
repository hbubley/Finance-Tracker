import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LOGIN } from '../context/types';
export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (loginObj) => {
        const {email, password} = loginObj
        setIsPending(true)
        setError(null)

        try {
            const auth = getAuth();
            const res = await signInWithEmailAndPassword(auth, email, password)
            if (!isCancelled) {
                dispatch({ type: LOGIN, payload: res.user })
                setIsPending(false)
            }
        } catch (error) {
            if (!isCancelled) {
                console.error(error)
                setError(error.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {login, isPending, error}
}