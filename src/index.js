import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import LoginUserSubmit from "./LogInUser";
import RegUser from "./RegisterUser";
import ViewAllPosts from "./AllPosts";
import { Link } from "react-router-dom";

const cohort = "2208-ftb-et-web-ft";
const strangerThings = "https://strangers-things.herokuapp.com/api";

const App = () => {
  //cant use API if no useEffect?

  return (
    <div>
      <div>
        <nav>
          RegisterNewUser Login Home CreatePost
          <Link to="/allposts">Show all Posts</Link>
        </nav>
      </div>
      <h1>Hello from Stranger Things</h1>
      <RegUser />
      <div></div>
      <div>
        <ul></ul>
      </div>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/allposts"
        element={<ViewAllPosts/>}
      ></Route>
    </Routes>
  </Router>
);
