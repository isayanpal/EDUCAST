import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import toast from "react-hot-toast";
import Logo from "../src/assets/images/educastLogo.jpg";

const Header = () => {
  // const [username, setUsername] = useState(null);
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("https://educast-backend.onrender.com/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        // setUsername(userInfo.username);
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("https://educast-backend.onrender.com/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    toast.success("Logged out successfully");
  }

  const username = userInfo?.username;

  return (
    <div>
      <header>
        <Link to="/" className="logo">
          <div className="website-logo">
            <img src={Logo} alt="" />
          </div>
        </Link>
        <nav>
          {username && (
            <>
              <span>Hello, {username}</span>
              <Link to="/create">Create new post</Link>
              <Link to="https://chat-app-one-ruddy.vercel.app/" target="_blank">
                Chat
              </Link>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
