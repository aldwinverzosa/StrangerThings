import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import LoginUserSubmit from "./LogInUser";
import RegUser from "./RegisterUser";
import ViewAllPosts from "./AllPosts";
import { Link } from "react-router-dom";
import './App.css';

const cohort = "2208-ftb-et-web-ft";
const strangerThings = "https://strangers-things.herokuapp.com/api";

const App = () => {

  return (
    <div>
      <div>
        <nav>
          <Link className="navBarLink" to="/allposts">ShowAllPosts</Link>
          <Link className="navBarLink" to="/register">RegisterNow</Link>
          <Link className="navBarLink" to="/login">Login</Link>
          <Link to="/home">Home</Link>

        </nav>
      </div>
      <h1>Stranger Things</h1>
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
      <Route path="/allposts" element={<ViewAllPosts />}></Route>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<RegUser />}></Route>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginUserSubmit />}></Route>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />}></Route>
    </Routes>
  </Router>
);
