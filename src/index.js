import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
const cohort = "2208-ftb-et-web-ft";
const strangerThings = "https://strangers-things.herokuapp.com/api";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [LoginName, setLoginName] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  //cant use API if no useEffect?
  useEffect(() => {
    const getAllData = async () => {
      await getAllPosts();
    };
    getAllData();
  }, []);

  const getAllPosts = async () => {
    const response = await fetch(`${strangerThings}/${cohort}/posts`);
    const data = await response.json();
    setAllPosts(data.data.posts);
  };

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
      <div>
        <nav>
          <span>Home  </span>
          <span> CreatePost  </span>
          <span>  AllPosts</span>
        </nav>
      </div>
      <h1>Hello from Stranger Things</h1>
      <div></div>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
