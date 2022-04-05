import { createContext, useState, useContext } from "react";

const LogadoContext = createContext();

export default function LogadoProvider({children}){
    
    const [logado, setLogado] = useState({
        autenticado:false,
        id:"",
        nome:"",
        sobrenome:"",
        email: "",
        ultimaPagina:"", 
        checkIn:new Date(), 
        checkOut: new Date()
    });
    
    return(
        <LogadoContext.Provider value={{logado, setLogado}}>
            {children}
        </LogadoContext.Provider>
    )
}

export function useLogado(){
    const context = useContext(LogadoContext);
    const {logado, setLogado} = context;
    return {logado, setLogado};
}