import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { projectAuth } from "../firebase/config";
import { LOGIN } from "../context/types";
import { useAuthContext } from "./useAuthContext";
export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();
    const signup = async (registrationObj) => {
        const { email, password, displayName } = registrationObj
        setError(null);
        setIsPending(true);

        try {
            const res = await createUserWithEmailAndPassword(projectAuth, email, password)

            if (!res) {
                throw new Error("Could not complete signup")
            }

            await updateProfile(projectAuth.currentUser, { displayName });

            dispatch({
                    type: LOGIN,
                    payload: res.user
                })
            setIsPending(false)
        } catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false)
        }
    }

    return { error, isPending, signup }
}