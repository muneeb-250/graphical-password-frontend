import { useState } from "react";
function Login({ setFile }) {
  const [username, setUsername] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Welcome back!</h2>
        <div className="inputbox">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="inputbox">
          <label>
            Password:
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}



export default Login;
