import React, { useState } from "react";
import "../styles/AdminSignin.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const AdminSignin = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const locations = useSelector((state) => state);
  const navigate = useNavigate();
  function signin() {
    if (
      locations.some(
        (location) =>
          location.password == user.password &&
          location.username == user.username,
      )
    ) {
      navigate("/admin/control");
    } else {
      alert("Invalid Username or password");
    }
  }

  return (
    <div class="logindiv" style={{ marginTop: "10%" }}>
      <h1 className="s-h1">Login Page</h1>
      <form className="signupForm" onSubmit={() => signin()}>
        <label for="username">Email:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter email address"
          className="su-input"
          value={user.username}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <label for="password">Password:</label>

        <br />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          className="su-input"
          value={user.password}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, password: e.target.value }))
          }
        />

        <br />

        <button className="su-button" type="submit">
          Login
        </button>

        <div class="error"></div>
      </form>
    </div>
  );
};
