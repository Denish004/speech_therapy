import { createContext, useReducer } from "react";

export const MatchResultsContext=createContext()

export const matchResultsReducer=(state,action)=>{
        switch(action.type){
            case 'SET_MACTHES':
                return{
               
                    matchResults:action.payload
                }
            case 'CREATE_MATCH':
                return{
                    matchResults:[action.payload,...state.matchResults]
                }
            case 'SET_MATCH':
                return{
                    matchResults:action.payload
                }
            default:
                return state
        }
}


export const MatchResultsContextProvider=({children})=>{
const [state,dispatch]=useReducer(matchResultsReducer,{matchResults:null})



    return(
        <MatchResultsContext.Provider value={{...state,dispatch}}>
            {children}
       </MatchResultsContext.Provider>
    )
}