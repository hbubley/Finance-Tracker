import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";
import { projectAuth } from "../firebase/config";
import { LOGIN } from "../context/types";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();
    const signup = async (registrationObj) => {
        const { email, password, displayName } = registrationObj
        setError(null);
        setIsPending(true);

        try {
            const auth = getAuth()
            const res = await createUserWithEmailAndPassword(auth, email, password);

            if (!res) {
                throw new Error("Could not complete signup")
            }

            await updateProfile(auth.currentUser, { displayName });
            if (!isCancelled) {
                dispatch({
                    type: LOGIN,
                    payload: res.user
                })
                setIsPending(false)
            }
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, isPending, signup }
}