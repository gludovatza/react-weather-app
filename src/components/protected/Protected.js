import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children, isLogged }) => {
	if (!isLogged) return <Navigate to="/" replace />;
	else return children;
};

export default Protected;