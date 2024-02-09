import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import toast from "react-hot-toast";
import LoginImg from "../assets/images/loginImg.png";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(e) {
    e.preventDefault();
    const response = await fetch("https://educast-backend.onrender.com/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
      toast.success("Logged in successfully");
    } else {
      toast.error("Wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="login-section">
      <div className="login-img-container">
        <div className="login-img">
          <img src={LoginImg} alt="" />
        </div>
      </div>
      <div>
        <form className="login" onSubmit={login}>
          <h1 className="login-header">Welcome Back!</h1>
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
          <button className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
