const regUser = () => {
  return (
    <form onSubmit={handleSubmit}>
      Name:
      <input
        type="text"
        value={newUser}
        onChange={(event) => {
          setNewUser(event.target.value);
          // console.log(event.target.value);
        }}
      ></input>
      Password:
      <input
        type="text"
        value={newPassword}
        onChange={(event) => {
          setNewPassword(event.target.value);
          // console.log(event.target.value);
        }}
      ></input>
      <button type="text">Register</button>
    </form>
  );
};
