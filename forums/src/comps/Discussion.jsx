import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/Discussion.css";
export default function Discussion() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [Title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [success, setSuccess] = useState("success");
  const [searchTerm, setSearchTerm] = useState("");
  const [nul, setnull] = useState("");

  let date = new Date();
  const { category } = useParams();
  let email = localStorage.getItem("email");

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/success/${category}`);
      const data = await response.json();
      console.log(data);
      setData(data);
      setOriginalData(data);
      setEmpty(data.length === 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSub = async (e) => {
    e.preventDefault();
    if (Title ==='' || desc === ''){
      setnull("Please Enter Title and Descrition First")
    }
    else{
    setnull("")
    let result = await fetch("http://localhost:5000/success", {
      method: "post",
      body: JSON.stringify({
        Title,
        desc,
        category,
        email,
        date,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    
    result = await result.json();
    setData([...data, result]);
    setOriginalData([...data, result]);
    setTitle("");
    setDesc("");
    fetchData();
    setSubmitted(true);
  }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/del/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedData = data.filter((entry) => entry._id !== id);
        setData(updatedData);
        setOriginalData(updatedData);
        setSuccess("Deleted Successfully");
      } else {
        console.error("Failed to delete comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm.trim() === "") {
      setData(originalData);
    } else {
      const filteredResult = originalData.filter((com) =>
        com.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setData(filteredResult);
    }
  };

  return (
    <div className="dis ">
      <div className="dis-head">
      <div className="dis-top">
        <h1 className="topic">Welcome to {category} forums</h1>
        <input
          className="form-control me-2 homeSearch dis-search"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <form onSubmit={handleSub}>
        <div className="dis-main">
          <div className="form-group ">
            <label htmlFor="exampleInputEmail1" className="title-top">
              Problem Title
            </label>
            <input
              type="text"
              className="form-control dis-in-title"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Problem Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputProblem Discription1">
              Problem Discription
            </label>
            <input
              type="text"
              className="form-control dis-in-desc"
              id="exampleInputPassword1"
              placeholder="Problem Discription"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-dis">
            Post
          </button>
          
        </div>
        {nul}
      </form>
      </div>
      <div className="questions-container" style={{ textAlign: "left" }}>
        {data.map((entry) => (
          <>
            
            <div key={entry._id} className="questions-post" style={{display : "flex"}}>
              <div className="dis-btn">
                {entry.email && (
                  <button className="dis-prof">{entry.email.charAt(0).toUpperCase()}</button>///profie pho
                )}
              </div>
              <div>
                <h3>
                  Title:{" "}
                  <Link to={`/solution/${entry._id}`} className="post-title">{entry.Title}</Link>
                </h3>
                <h5 className="post-content">Description:{entry.desc}</h5>
                <div className="post-info">
                        <p>
                            <strong>Author:</strong> {entry.email} <br />
                            <strong>Date:</strong> {new Date(entry.date).toLocaleString()}
                        </p>
                    </div>
                {entry.email === email && (
                  <button onClick={() => handleDelete(entry._id)}>
                    Delete
                  </button>
                )}
                
              </div>
            </div>
            
          </>
        ))}
        
      </div>
      {empty && <h1>Start a discussion</h1>}
      {submitted && <h1>{success}</h1>}
    </div>
  );
}
