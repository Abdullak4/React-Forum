import React, { useState, useEffect } from "react";
import './css/Profile.css'
export default function Profile() {
  const [info, setInfo] = useState([]);
  const [ans, setans] = useState([]);
  const [questions, setQuestions] = useState([]);
  const email = localStorage.getItem("email");

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`http://localhost:5000/details/${email}`);
      const data = await response.json();
      setQuestions(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const fetchAnswers = async () => {
    try {
      let result = await fetch(`http://localhost:5000/sol/${email}`);
      const data = await result.json();
      setans(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const fetchProfile = async () => {
      let result = await fetch(`http://localhost:5000/profile/${email}`);
      result = await result.json();
      setInfo([result])
  
  }
  useEffect(() => {
    fetchProfile();
    fetchQuestions();
    fetchAnswers();
  },[]); 
  console.log(info)
  return (
    <div>
    <div className="profile">
    <div style={{ textAlign: 'left' }} className="info">
      {info.map((pro)=>(
        <div className="prof">
          <div>
        
          <button className="pf"><h3>{pro.name.charAt(0).toUpperCase()}{pro.lastname.charAt(0).toUpperCase()}</h3></button>
          
         
         </div>
         <div>
         <h4>User : {pro.name} {pro.lastname}</h4>
         <hr />
        <h4>Email : {pro.email}</h4>
        <hr />
        <h6>Question asked {questions.length}</h6>
        <hr />
        <h6>Questions answered {ans.length}</h6>
        </div>
        </div>
        
        ))}
      </div>
      <div className="details">
        <h2 style={{ textAlign: 'left' }}>Questions Asked</h2>
        
          {questions.map((question, index) => (
            <div key={index}>
              <h3>Title: {question.Title}</h3>
              <p>Description: {question.desc}</p>
              <p>Category: {question.category}</p>
            </div>
          ))}
        
      
         <hr />
     
        <h2 style={{ textAlign: 'left' }}>Questions Answered</h2>
        
          {ans.map((solution, index) => (
            <div key={index}>
              <p>Description: {solution.desc}</p>
            </div>
          ))}
        
      </div>
    
    </div>
          </div>
  );
}
