import React,{createContext,useContext,useState} from "react";
import Cookies from 'js-cookie';
const StateContext = createContext()


export const ContextProvider = ({children})=>{
    /////////////////////////// filter side bar and search filters logic/////////////////////////
    const [view,setView] = useState("list")
    /////////////////////////// user session //////////////////////////////////
    const [user, setUser] = useState(() => Cookies.get('token') || null);

    return(
        <StateContext.Provider value={{view,setView,user,setUser}}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)