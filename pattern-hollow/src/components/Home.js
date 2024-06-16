import React from "react"
import { useLocation } from "react-router-dom";

function Home() {
    const location = useLocation();
    const id = location.state?.id || ''; // Use optional chaining and provide a default value

    return (
        <div className="homepage">
            {id ? (
                <h1>Hello {id} and welcome to the home</h1>
            ) : (
                <h1>Welcome to the home</h1>
            )}
        </div>
    );
}

export default Home;
