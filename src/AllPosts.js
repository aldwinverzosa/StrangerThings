import React from "react";
import { useEffect, useState } from "react";

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
    RegisterNewUser Login Home CreatePost
    {/* <Link to="/allposts">Show all Posts</Link> */}
  </nav>
    <ul>
      {allPosts.map((singleItem, i) => {
        return <li key={i}>{singleItem.title}</li>;
      })}
    </ul>
    </div>
  );
};

export default ViewAllPosts;
