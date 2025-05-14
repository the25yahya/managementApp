import React,{createContext,useContext,useState} from "react";
const StateContext = createContext()


export const ContextProvider = ({children})=>{
    /////////////////////////// filter side bar and search filters logic/////////////////////////
    const [view,setView] = useState("list")

    return(
        <StateContext.Provider value={{view,setView}}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)