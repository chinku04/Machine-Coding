import React from 'react';
import { Route, Redirect, Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    // protection logic here
    const isAuth = true;
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;