import './App.css';
import defaultImage from '/default.jpg'
import { useState } from 'react';
import Login from "./Login";

export default function App() {
  const [file, setFile] = useState();
  return (
    <main>
      <h1>Graphical <span>Password</span></h1>
      <div className="left">
        <img src={file ? file : defaultImage} />
        <h3>Your image</h3>
      </div>
      <div className="right">
        <Login setFile={setFile} />
        <p>Don't have an account? <span>Sign up!</span></p>
      </div>
    </main>

  )
}

