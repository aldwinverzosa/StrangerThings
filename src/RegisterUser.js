import React from 'react';
import { useState } from "react";

const cohort = "2208-ftb-et-web-ft";
const strangerThings = "https://strangers-things.herokuapp.com/api";


const RegUser = () => {
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("NAME AND PASSWORD", newUser, newPassword);
    // console.log("registerUser");
    const response = await fetch(`${strangerThings}/${cohort}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: newUser,
          password: newPassword,
        },
      }),
    });
    const data = await response.json();
    console.log("data", data);
    console.log("data2", data.data.token);

    setNewUser("");
    setNewPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      Name:
      <input
        type="text"
        value={newUser}
        onChange={(event) => {
          setNewUser(event.target.value);
          // console.log(event.target.value);
        }}
      ></input>
      Password:
      <input
        type="text"
        value={newPassword}
        onChange={(event) => {
          setNewPassword(event.target.value);
          // console.log(event.target.value);
        }}
      ></input>
      <button type="text">Register</button>
    </form>
  );
};

export default RegUser