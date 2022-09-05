const LoginUserSubmit = () => {
  return (
    <div>
      {/* Login Submit Form */}
      <form onSubmit={loginSubmit}>
        Name:
        <input
          type="text"
          value={LoginName}
          onChange={(event) => {
            setLoginName(event.target.value);
            // console.log(event.target.value);
          }}
        ></input>
        Password:
        <input
          type="text"
          value={LoginPassword}
          onChange={(event) => {
            setLoginPassword(event.target.value);
            // console.log(event.target.value);
          }}
        ></input>
        <button type="text">Log In</button>
      </form>
    </div>
  );
};
