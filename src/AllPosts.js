import React from 'react';
import { useState } from 'react';

const ViewAllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);


  return (
    <div>
      <h1>All Postings</h1>
      {allPosts.map((post, i) => {
        return <p key={i}>{post.title}</p>;
      })}
    </div>
  );
};

export default ViewAllPosts
