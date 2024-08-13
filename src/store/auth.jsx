import { createContext, useContext, useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";



export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeTokenInLs = (serverToken) => {
        return localStorage.setItem("token", serverToken)
    }


    let isloggedin = !!token;

    // logout 
    const logoutuser = () => {
        const navigate = useNavigate();

        setToken("");
        localStorage.removeItem("token");

        navigate("/");
    };

    return <AuthContext.Provider value={{storeTokenInLs, logoutuser, isloggedin}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error ("useAuth used outside of the provider")
    }
    return authContextValue; 
}