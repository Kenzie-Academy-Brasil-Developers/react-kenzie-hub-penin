import { Route, Routes, useNavigate } from "react-router-dom";
import { Error } from "../pages/ErroPages/Index";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { useState } from "react";

export const RoutesMain = () => {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const userLogout = () => {
        setUser(null);
        navigate("/")
        localStorage.removeItem("@TOKEN")
    };

    return <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard user={user} userLogout={userLogout} />} />
        <Route path="/*" element={<Error />} />
    </Routes>
};