import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidApi";




const AuthContext = createContext();

export default function AuthProvider({children}){
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    const [value,setValue] = useState("NEW")

    useEffect(()=>{
        fetchAllData(value)
    },[value])

    const fetchAllData=(query)=>{
        setLoading(true)

        fetchData(`search/?q=${query}`)
            .then((contents)=>{
                console.log(contents)
                setData(contents)
                setLoading(false)})
                       
    }

    return (
        <AuthContext.Provider value={{loading,data,value,setValue}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext)