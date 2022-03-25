import { useReducer, useEffect, useState } from 'react';
import { auth } from 'firebase/auth'

const initialState = {
    document: null,
    pendingState: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])
}