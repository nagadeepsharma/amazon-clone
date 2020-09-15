import React,{createContext,useReducer,useContext} from 'react'

export const userContext=createContext()

export  function UserContextProvider({initialState,reducer,children}){
    return(
        <userContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </userContext.Provider>
    )
}
export const useStateValue=()=>useContext(userContext)