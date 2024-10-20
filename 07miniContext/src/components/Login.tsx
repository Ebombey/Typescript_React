import React, { useState } from "react";
import { useUser } from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUser();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setUser({ username, password });
    setUsername("");
    setPassword("");
  }

  return (
    <>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Login;
