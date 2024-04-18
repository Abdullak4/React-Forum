import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Solution() {
  const { id } = useParams();
  const[que,setque] = useState([])
  const[ans,setans] = useState([])
  const [desc,setdesc] = useState('')
  const [nul, setnull] = useState("");
  console.log(que)
  const question = async () =>{
    let result = await fetch(`https://react-forum-nine.vercel.app
/solution/${id}`)
    result = await result.json()
    console.log(result)
    setque(result)
  }
  const email = localStorage.getItem("email")
  const date = new Date()
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if (desc === ''){
      setnull("Please Enter valid solution")
    }
    else{
      setnull("")
      let response = await fetch('https://react-forum-nine.vercel.app/ans', {
        method: "post",
        body: JSON.stringify({
          email,
          id,
          desc,
          date
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      getAnswers(); 
      setdesc('')
    }
  }
  const getAnswers = async ()=>{
    let result = await fetch (`https://react-forum-nine.vercel.app
/ans/${id}`)
    result = await result.json()
    setans(result)
  }
  useEffect(()=>{
    question()
    getAnswers();
  },[])

  const handleDelete = async (id )=>{
     let result = await fetch(`https://react-forum-nine.vercel.app
/ans/${id}`,{
      method: "DELETE",
    })
    if (result.ok){
      let updateData = ans.filter(sol => sol._id !== id)
      setans(updateData)
    }
  }



  return (
    <div className="dis">
      <div>
        {
          que.map((problem)=>(
            <div>
              <h1>{problem.Title}</h1>
              <h5>{problem.desc}</h5>
              <hr></hr>
            </div>
          ))
        }
      </div>
      <form onSubmit={handleSubmit}>
        <div className="dis-main">
          <div className="form-group ">
            <label htmlFor="exampleInputEmail1" className="title-top">
              Problem Solution
            </label>
            <input
              type="text"
              className="form-control dis-in-title"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Problem Solution"
              value={desc}
              onChange={(e) => setdesc(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-dis">
            Submit
          </button>
        </div>
        <div className="null" style={{ color: 'red', fontWeight: 'bold' }}>
  {nul}
</div>
      </form>

      
      <div className="questions-container" style={{ textAlign: 'left' }}>
      {
        ans.map((sol)=>(
          <div  className="questions-post" style={{display : "flex"}}>
          <div className="dis-btn">
                {sol.email && (
                  <button className="dis-prof">{sol.email.charAt(0).toUpperCase()}</button>///profie pho
                )}
              </div>
              <div>
              <h6 lassName="post-content">{sol.desc}</h6>
          {sol.email === email && <button onClick={()=>handleDelete(sol._id)}>Delete</button>}
          <div className="post-info">
                        <p>
                            <strong>Author:</strong> {sol.email} <br />
                            <strong>Date:</strong> {new Date(sol.date).toLocaleString()}
                        </p>
                    </div>
              </div>
         
          </div>
        ))
      }
      </div>
    </div>
  );
}
