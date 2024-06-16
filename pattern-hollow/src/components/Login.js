import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Login() {
    const navigate = useNavigate(); // Corrected to useNavigate

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/login", { // Changed URL to the login endpoint
                email, password
            });

            if (res.data === "success") {
                navigate("/", { state: { id: email } }); // Navigate to home page on successful login
            } else {
                alert("Login failed. Please check your credentials."); // Show alert if login failed
            }
        } catch (error) {
            alert("An error occurred. Please try again later."); // Show alert for other errors
            console.log(error);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit}> {/* Corrected from action="POST" to onSubmit={submit} */}
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button> {/* Changed input type="submit" to button type="submit" */}
            </form>
            <br />
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> {/* Link to sign up page */}
        </div>
    )
}

export default Login

