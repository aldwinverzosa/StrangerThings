import { Link } from "react-router-dom";
import "./App.css";

import MyProfile from "./myProfile";

const Dashboard = () => {
  return (
    <div>
      <div>
        <nav>
          <Link className="navBarLink" to="/allposts">
            All Posts
          </Link>
          <Link className="navBarLink" to="/createpost">
            Create Post{" "}
          </Link>
        </nav>
      </div>

      <h1>Welcome to your Dashboard</h1>
      <div>
        <MyProfile />
      </div>
      <div></div>
    </div>
  );
};
export default Dashboard;
