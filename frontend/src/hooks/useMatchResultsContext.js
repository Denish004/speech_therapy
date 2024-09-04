import {MatchResultsContext} from '../contexts/MatchResultsContext'
import { useContext } from 'react'


export const useMatchResultsContext=()=>{
    const context=useContext(MatchResultsContext)
    if(!context){
        throw Error('usePropertiesContext must be used inside an PropertiesContextProvider')
    }
    return context
}