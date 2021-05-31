import React, {useReducer} from 'react'
import {Products} from "./context"
import {initialState, reducer} from "./productreducer"

export default function ProductProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <Products.Provider value={{state, dispatch}}>
            {children}
            </Products.Provider>
        </>
    )
}
