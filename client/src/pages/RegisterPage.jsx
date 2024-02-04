import React, { useState } from "react";
import toast from "react-hot-toast";
import RegImg from "../assets/images/registerImg.png";

const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 200) {
      toast.error("Registration failed");
    } else {
      toast.success("Registraiton Successful");
    }
  }

  return (
    <div className="register-section">
      <div className="register-img-container">
        <div className="register-img">
          <img src={RegImg} alt="" />
        </div>
      </div>
      <div>
        <form className="register" onSubmit={register}>
          <h1 className="register-header">Register</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
