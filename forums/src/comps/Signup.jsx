import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/signup.css'
export default function Signup() {
   
  const [name, setname] = useState(""); 
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({
        name,
        lastname,
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      if (email === "") {
        seterror("Email cannot be empty");
        return;
    } else if (password === "") {
        seterror("Password cannot be empty");
        return;
    } else if (password.length < 7) {
        seterror("Length of password cannot be less than 7");
        return;
    }  else if (errorData && errorData.message) {
        // Print the error message for the email field
        seterror(errorData.message);
        return;
    } 
    else if (!/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      seterror("Password should contain at least one special character");
      return;
  }
    }
    
    else {
        localStorage.setItem("user",name)
        localStorage.setItem("email",email)
        
        navigate('/')
    }
  };
  return (
    <div className="signup-container">
    <div className="sign">
    <div className="main-side">
      <form onSubmit={handleSubmit} className="main">
        <div className="mb-3 names">
          <div className="username">
          <label htmlFor="exampleInputName" className="name label">
            Name
          </label>
          <input
            type="text"
            className="form-control name"
            id="exampleInputName"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          </div>
          
          <div>
          <label htmlFor="exampleInputName" className="lastname label">
            latname
          </label>
          <input
            type="text"
            className="form-control lastname"
            id="exampleInputName"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
          </div>
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="label">
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
          <label htmlFor="exampleInputPassword1" className="label">
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
        {error && <div className="error">{error}</div>}
        <button type="submit" className="btn sub">
          Sign Up
        </button>
      </form>
      <img className="signup-img" src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1603737480214-Community%20Forum.png"/></div>

    </div>
  </div>
  );
}