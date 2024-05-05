import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function UserPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="user-page">
      <h1>Welcome, User!</h1>
      <button onClick={handleLogout} className="login-button2">
        Logout
      </button>
    </div>
  );
}

export default UserPage;
