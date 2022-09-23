const cohort = "2208-ftb-et-web-ft";
const strangerThings = "https://strangers-things.herokuapp.com/api";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const deletePost = (id) => {
    console.log("hello", id);
    fetch(`${strangerThings}/${cohort}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  };

  const [myResult, setmyResult] = useState({});

  const test = async () => {
    fetch(`${strangerThings}/${cohort}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log('RESULT',result);
        // TODO array.filter only keep active: true
        // const checkTrue = () => {
        //     const onlyTrue = result.data.posts.active.filter(true);
        //     return onlyTrue;
        //   };
        //  const onlyTrueResult = result.data.posts.active.filter(checkTrue)

        const result2 = result.data.posts.filter(
          (post) => post.active === true
        );

        const finalResult = {
          success: result.success,
          username: result.data.username,
          posts: result2,
        };
        console.log(finalResult);

        setmyResult(finalResult);
        // console.log("0RESULT", result);
        // console.log("1RESULT", result.data);
        // console.log("2RESULT", result.data.posts);
      })
      .catch(console.error);
  };

  const onLoad = () => {
    useEffect(() => {
      test();
    }, [test]);
  };
  onLoad();

  return (
    <div>
      {myResult.success ? <h1>{myResult.username}!</h1> : <h3>Loading ...</h3>}
      {myResult.success ? (
        <h1>
          {myResult.posts.map((me, i) => {
            return (
              <div>
                <div className="card" key={i}>
                  <h2>Title: {me.title}</h2>
                  <h2>Description: {me.description}</h2>
                  <h2>Price: {me.price}</h2>
                  <button type="button" onClick={() => deletePost(me._id)}>
                    Delete Post
                  </button>
                </div>
              </div>
            );
          })}
        </h1>
      ) : (
        <h3>Loading ...</h3>
      )}
    </div>
  );
};

export default MyProfile;
