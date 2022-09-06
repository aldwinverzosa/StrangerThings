import { useState } from "react";

const cohort = "2208-ftb-et-web-ft";
const strangerThings = "https://strangers-things.herokuapp.com/api";

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const tokenCode = localStorage.getItem("key");

  //////
  const response = fetch(`${strangerThings}/${cohort}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenCode}`,
    },
    body: JSON.stringify({
      post: {
        title: "My favorite stuffed animal",
        description:
          "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
        price: "$480.00",
        willDeliver: true,
      },
    }),
  });

  return (
    <form onSubmit={loginSubmit}>
      Title
      <input
        type="text"
        value={LoginName}
        onChange={(event) => {
          setLoginName(event.target.value);
          // console.log(event.target.value);
        }}
      ></input>
      Description:
      <input
        type="text"
        value={LoginPassword}
        onChange={(event) => {
          setLoginPassword(event.target.value);
          // console.log(event.target.value);
        }}
      ></input>
      <button type="text">Submit</button>
    </form>
  );
};

export default CreatePost
