import { Link } from "react-router-dom";
import "./App.css";
import LogoutButton from "./logout";

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
            Create Post
          </Link>
        </nav>
        <div className="logout2">
        <LogoutButton/>
        </div>
        <div>
        </div>
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
