const viewAllPosts = () => {
  return (
    <div>
      <h1>All Postings</h1>
      {
        allPosts.map((post, i) => {
          return <p key={i}>{post.title}</p>;
        })
      }
    </div>
  );
};
