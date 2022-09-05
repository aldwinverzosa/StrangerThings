import React from 'react';
import { useState } from 'react';

const cohort = "2208-ftb-et-web-ft";
const strangerThings = "https://strangers-things.herokuapp.com/api";

const LoginUserSubmit = () => {
  const [LoginName, setLoginName] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const loginSubmit = async (event) => {
    event.preventDefault();
    console.log("LoginSubmit");
    const response = await fetch(`${strangerThings}/${cohort}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: LoginName,
          password: LoginPassword,
        },
      }),
    });
    const data = await response.json();
    console.log("loginData", data);
    let token = await data.data.token;

    localStorage.setItem("token", JSON.stringify(token));
  };
  return (
    <div>
      {/* Login Submit Form */}
      <form onSubmit={loginSubmit}>
        Name:
        <input
          type="text"
          value={LoginName}
          onChange={(event) => {
            setLoginName(event.target.value);
            // console.log(event.target.value);
          }}
        ></input>
        Password:
        <input
          type="text"
          value={LoginPassword}
          onChange={(event) => {
            setLoginPassword(event.target.value);
            // console.log(event.target.value);
          }}
        ></input>
        <button type="text">Log In</button>
      </form>
    </div>
  );
};

export default LoginUserSubmit