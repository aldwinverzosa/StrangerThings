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

const App = () => {
  return (
    <div>
      <div>
        <nav>
          <Link className="navBarLink" to="/login">
            Login
          </Link>
        </nav>
      </div>
      <h2>Stranger Things</h2>
      <div>
        <ul></ul>
      </div>
      <div>
        <RegUser />
      </div>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <Router>
    {
      <Routes>
        <Route path="/allposts" element={<ViewAllPosts />}></Route>
        <Route path="/register" element={<RegUser />}></Route>
        <Route path="/login" element={<LoginUserSubmit />}></Route>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/home" element={<App />}></Route>
        <Route path="/dashboard" element={<MyProfile />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
      </Routes>
    }
  </Router>
);
