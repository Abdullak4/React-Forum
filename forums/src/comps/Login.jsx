import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css"
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        const responseData = await response.json();
        seterror(responseData.message);
      } else {
        seterror("");
        localStorage.setItem("email",email)
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
      seterror("Internal server error");
    }
  };

  return (
    <div>
      <div className="login-img">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        {error && <div>{error}</div>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <img className="login-image" src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1603737480214-Community%20Forum.png"></img>
      </div>
    </div>
  );
}
