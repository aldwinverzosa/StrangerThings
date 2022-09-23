import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import LogoutButton from "./logout";

const cohort = "2208-ftb-et-web-ft";
const strangerThings = "https://strangers-things.herokuapp.com/api";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const PostHandle = async (ev) => {
    ev.preventDefault();
    console.log("TITLE", title);
    console.log("DESCRIPTION", description);
    console.log("PRICE", price);
    const response = await fetch(`${strangerThings}/${cohort}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

      body: JSON.stringify({
        post: {
          title,
          description,
          price,
        },
      }),
    });
    const data = await response.json();
    console.log("DATA", data);

    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <div>
      <nav>
        <Link className="navBarLink" to="/dashboard">
          Dashboard
        </Link>
      </nav>
      <div className="logout2">
        <LogoutButton/>
        </div>

      <h1>Create Post</h1>
      <form onSubmit={PostHandle}>
        Title
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            console.log(event.target.value);
          }}
        ></input>
        Description:
        <input
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
            console.log(event.target.value);
          }}
        ></input>
        Price:
        <input
          type="text"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
            console.log(event.target.value);
          }}
        ></input>
        <button type="text">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
