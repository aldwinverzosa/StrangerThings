import {BrowserRouter as Router, Routes} from 'react-router-dom'
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import LoginUserSubmit from "./LogInUser";
import RegUser from "./RegisterUser";
import ViewAllPosts from "./AllPosts";

const cohort = "2208-ftb-et-web-ft";
const strangerThings = "https://strangers-things.herokuapp.com/api";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);

  //cant use API if no useEffect?
  useEffect(() => {
    const getAllData = async () => {
      await getAllPosts();
    };
    getAllData();
  }, []);

  const getAllPosts = async () => {
    const response = await fetch(`${strangerThings}/${cohort}/posts`);
    getAllPosts();
    const data = await response.json();
    setAllPosts(data.data.posts);
  }

  return (
    <div>
      <div>
        <nav>
        <span>RegisterNewUser </span>
        <span>  Login</span>
          <span>  Home </span>
          <span> CreatePost </span>
          <span> AllPosts</span>
        </nav>
      </div>
      <h1>Hello from Stranger Things</h1>
      <RegUser />
      <div></div>
      <LoginUserSubmit />
      <div>
        <h1>All Postings</h1>
        {allPosts.map((post, i) => {
          return <p key={i}>{post.title}</p>;
        })}
      </div>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Router><App/></Router>);
