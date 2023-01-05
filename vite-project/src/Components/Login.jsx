import React, { useContext } from "react";
import "../Index.css";
import { Context } from "../Context";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
export default function Login() {
  const { isAuth } = useContext(Context);
  const { loggedIn } = useContext(Context);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handChange = (event) => {
    setEmail(event.target.value);
  };
  const HandChange = (event) => {
    setPassword(event.target.value);
  };
  const handSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/login", { email: Email, password: Password })
      .then((event) => loggedIn(event.data.token));
  };

  if (isAuth.token) return <Navigate to="/" />;
  return (
    <div>
      <form className="wrapper" onSubmit={handSubmit}>
        <input
          type="text"
          style={{ backgroundColor: "bisque" }}
          placeholder="Enter your email ID"
          onChange={handChange}
          required="required"
        />
        <br />
        <br />
        <input
          type="password"
          style={{ backgroundColor: "bisque" }}
          placeholder="Enter your password"
          onChange={HandChange}
          required="required"
        />
        <br />
        <br />
        <button type="submit" style={{ backgroundColor: "bisque" }}>
          Submit
        </button>
      </form>
    </div>
  );
}