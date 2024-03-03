import React from "react";

const Login = () => {
    function handleSubmit() {
        // Replace with logic to handle login
        const resp = fetch('/api/login', {
            headers: {
                'Content-Type': 'application/json',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
                'Access-Control-Allow-Credentials': true,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
                "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
            },
        });

        if (resp.status === 200) {
            // Replace with logic to redirect to the user's dashboard
            console.log('Login successful');
            console.log(resp.json());
            window.location.href = '/dashboard';
        } else {
            // Replace with logic to display an error message
            console.error('Login failed');
        }


    }


    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}


export default Login;
