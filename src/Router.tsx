import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const Router = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default Router;