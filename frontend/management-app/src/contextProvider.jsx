import React,{createContext,useContext,useState} from "react";
import Cookies from 'js-cookie';
const StateContext = createContext()


export const ContextProvider = ({children})=>{
    /////////////////////////// filter side bar and search filters logic/////////////////////////
    const [view,setView] = useState("list")
    /////////////////////////// user session //////////////////////////////////
    const [user, setUser] = useState(() => Cookies.get('token') || null);
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    return(
        <StateContext.Provider value={{view,setView,user,setUser,employees, setEmployees,filteredEmployees, setFilteredEmployees}}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)