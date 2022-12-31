import React from 'react'
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import Home from './Home';
const Login = (login) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);
  const handSubmit = (event) => {
    event.preventDefault();
    loginReq({ email, password });
  };
  const loginReq = async () => {
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        method:"POST",
        headers:{"context-type":"application/json"},
        body:JSON.stringify({
          email:"eve.holt@psgtech.ac.in",
          password:"pistol"
        })
      });

      if (res.data.token) {
        login(res.data.token);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form
        onSubmit={handSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          margin: "auto",
          gap: "25px",
          marginTop: "25px"
        }}
      >
        <input
          type="text"
          placeholder="Enter your Email ID"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={<Home />}>Submit</button>
      </form>
    </>
  );
}

export default Login