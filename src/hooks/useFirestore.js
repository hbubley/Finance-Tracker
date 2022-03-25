import { useReducer, useEffect, useState } from 'react';
import { db } from '../firebase/config'

const initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return {
                ...state,
                isPending: true
            }
        default:
            return state
    }
}
export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);
    const ref = collection(db, 'collection')

    const addDocument = (doc) => {
        if (!isCancelled) {
            dispatch({ type: 'IS_PENDING' })
        }
    }

    const deleteDocument = (id) => {

    }
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])
}