import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("email"));
  const email = localStorage.getItem("email");
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  const handleSignin = () => {
    if (localStorage.getItem("email")) {
      setIsLoggedIn(true);
    }
  };

  const handleSignupClick = () => {
    if (!isLoggedIn) {
      handleSignin();
    }
  };

  const handleSearch = () => {
    if (searchTerm) {
      window.location.href = `/home?search=${searchTerm}`;
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "black" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBAckRCd6JZU_X12XpdNl_a-dLQgCNJmqF_aURWM-Cg&s" alt="logo" style={{ width: "100px" }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home"style={{ color: "white" }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"style={{ color: "white" }}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Tools"style={{ color: "white" }}>Tools</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog"style={{ color: "white" }}>Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/questions"style={{ color: "white" }}>Questions</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-light" type="button" onClick={handleSearch}><FaSearch /></button>
            </form>
            <div className="d-flex">
              {isLoggedIn ? (
                <>
                  <Link className="nav-link" to="/profile" style={{ "color": "white" }}>Profile</Link>
                  <button className="btn" onClick={handleLogout} style={{ color: "white" }}> Logout</button>
                </>
              ) : (
                <>
                  <Link to="/signup" className="btn" onClick={handleSignupClick}style={{ color: "white" }}>Signup</Link>
                  <Link to="/login" className="btn" onClick={handleSignupClick}style={{ color: "white" }}>Login</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
