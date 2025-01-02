import {createContext, useState, useContext, useEffect} from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    const [signed, setSigned] = useState(false);
    useEffect(() => {
        const signed = localStorage.getItem("signed");
        if (!signed) {
            setSigned(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("signed", signed);
    }, [signed]);

    const signOut = () => {
        setSigned(false);
    }

    const signIn = () => {
        setSigned(true);
    }

    const isSigned = () => {
        return signed === true;
    }

    const value = {
        signed, signOut, signIn, isSigned
    }
    
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>

}