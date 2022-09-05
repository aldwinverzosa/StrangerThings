import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const cohort = "2208-ftb-et-web-ft";
const strangerThings = "https://strangers-things.herokuapp.com/api";

const ViewAllPosts = (props) => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      await getAllPosts();
    };
    getAllData();
  }, []);
  const allitems = props.allitems;
  const getAllPosts = async () => {
    const response = await fetch(`${strangerThings}/${cohort}/posts`);
    getAllPosts();
    const data = await response.json();
    setAllPosts(data.data.posts);
  };

  return (
    <div>
      <nav>
      <Link className="navBarLink" to="/register">RegisterNow</Link>
      <Link className="navBarLink" to="/login">Login</Link>
      <Link className="navBarLink" to="/home">Home</Link>



      </nav>
      <h1>All Postings</h1>
      <ul>
        {allPosts.map((singleItem, i) => {
          return <li key={i}>{singleItem.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ViewAllPosts;
