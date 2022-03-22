import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';
export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async () => {
        setIsPending(true)
        setError(null)

        try {
            
        } catch (error) {
            if(!isCancelled){
                console.error(error)
                setError(error.message)
                setIsPending(false)
            }
        }
    }
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])
}