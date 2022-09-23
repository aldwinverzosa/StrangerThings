import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import LoginUserSubmit from "./LogInUser";
import RegUser from "./RegisterUser";
import ViewAllPosts from "./AllPosts";
import { Link } from "react-router-dom";
import "./App.css";
import CreatePost from "./CreatePost";
import Dashboard from "./homeLoggedUser";
import MyProfile from "./myProfile";

const logout = () => {
    localStorage.clear();
    window.location.href = '/';
}

const LogoutButton = () => {
  return <button className="logout" onClick={() => logout()}>Logout</button>;
};

// <button type="button" onClick={() => deletePost(me._id)}>
// Delete Post


export default LogoutButton;