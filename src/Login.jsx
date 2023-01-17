import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Login({ setFile, setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setUser(username);
    navigate('/auth')
  };

  const handleChange = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  //   fetch('loginlink', {
  //     method: 'POST',
  //     body: file,
  //     // 👇 Set headers manually for single file upload
  //     headers: {
  //       'content-type': file.type,
  //       'content-length': `${file.size}`, // 👈 Headers need to be a string
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // };

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
