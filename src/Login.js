import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Ensure you have this CSS file in your project

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Define acceptable username and password pairs
  const credentials = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" },
  ];

  const handleLogin = (event) => {
    event.preventDefault();
    const isValid = credentials.some(
      (cred) => cred.username === username && cred.password === password
    );
    if (isValid) {
      console.log("Login successful");
      navigate("/userpage"); // Redirect to user page on successful login
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
