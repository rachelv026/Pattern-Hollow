import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/signup", {
                email, password
            });

            if (res.data === "exist") {
                alert("User already exists");
            } else if (res.data === "notexist") {
                alert("Signup successful! Please login.");
                navigate("/login");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
            console.error(error);
        }
    }

    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <form onSubmit={submit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
            <br />
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )
}

export default Signup;
