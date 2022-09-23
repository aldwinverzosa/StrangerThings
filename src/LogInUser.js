import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const cohort = "2208-ftb-et-web-ft";
const strangerThings = "https://strangers-things.herokuapp.com/api";

const LoginUserSubmit = () => {
  const navigate = useNavigate();

  const [LoginName, setLoginName] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  let [loginNow, setLoginNow] = useState("");

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

    loginNow = setLoginNow(data.success);

    if (data.success === true) {
      let token = await data.data.token;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <div>
        <nav className="nav">
          {/* <Link className="navBarLink" to="/allposts">ShowAllPosts</Link> */}
          <Link className="navBarLink" to="/register">
            Register Now
          </Link>
          {/* <Link className="navBarLink" to="/home">Home</Link> */}
        </nav>
      </div>
      {/* Login Submit Form */}
      <h1 class="login">LOGIN</h1>
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
          type="password"
          value={LoginPassword}
          onChange={(event) => {
            setLoginPassword(event.target.value);
            // console.log(event.target.value);
          }}
        ></input>
        <button type="text">Log In</button>
        <h4>{loginNow}</h4>
        {loginNow === true ? (
          <h3>Welcome Back</h3>
        ) : loginNow === false ? (
          <h3>Please Register now</h3>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default LoginUserSubmit;
