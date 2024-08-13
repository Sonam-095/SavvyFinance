import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../store/auth";

export const Logout = () => {

    const logoutuser = useAuth();
    useEffect(() => {
        logoutuser;
    },[logoutuser]);

    return <Navigate to="/" />
};