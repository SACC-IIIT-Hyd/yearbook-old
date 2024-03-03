"use client";
import React from "react";

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <button onClick={window.location.href = '/api/login'}>Login</button>
        </div>
    );
}


export default Login;
