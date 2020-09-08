import React from 'react'

export default function makeStore(guivenReducer, initialState, key) {
    const dispatchContext = React.createContext()
    const storeContext = React.createContext()

    try {
        initialState = JSON.parse(localStorage.getItem(key)) || initialState
    } catch {}

    const reducer = (state, action) => {
        const newState = guivenReducer(state, action)
        localStorage.setItem(key, JSON.stringify(newState))
        return newState
    }

    const StoreProvider = ({ children }) => {
        const [computers, dispatch] = React.useReducer(reducer, initialState)

        return (
            <dispatchContext.Provider value={dispatch}>
                <storeContext.Provider value={computers}>
                    {children}
                </storeContext.Provider>
            </dispatchContext.Provider>
        )
    }

    function useDispatch() {
        return React.useContext(dispatchContext)
    }

    function useStore() {
        return React.useContext(storeContext)
    }

    return [StoreProvider, useStore, useDispatch]
}