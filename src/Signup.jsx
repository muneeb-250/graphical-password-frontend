import { useState } from "react";
function Signup() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({
    fname: "", lname: "", email: "", image: ""
  })

  const handleSubmit = e => {
    e.preventDefault();
    if (!file) {
      return;
    }

    // 👇 Uploading the file using the fetch API to the server
    fetch('signuplink', {
      method: 'POST',
      body: file,
      // 👇 Set headers manually for single file upload
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  const handleChange = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };



  return (
    <>
      <h2>Welcome to Graphical Password!</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          <label>
            First Name:
            <input
              type="text"
              value={userData.fname}
              onChange={e => setUserData({ ...userData, fname: e.target.value })}
            />
          </label>
        </div>
        <div className="inputbox">
          <label>
            Last Name:
            <input
              type="text"
              value={userData.lname}
              onChange={e => setUserData({ ...userData, lname: e.target.value })}
            />
          </label>
        </div>
        <div className="inputbox">
          <label>
            Email:
            <input
              type="text"
              value={userData.email}
              onChange={e => setUserData({ ...userData, email: e.target.value })}
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
        <button type="submit">Signup</button>
      </form>
    </>
  );
}



export default Signup;
