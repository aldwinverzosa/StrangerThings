import React from 'react';



const ViewAllPosts = (props) => {
  const allitems = props.allitems

  return (
    <div>
      {
      allitems.map((singleItem, i) => {
        return <li key={i}>{singleItem.title}</li>;
      })}
    </div>
  );
};

export default ViewAllPosts
