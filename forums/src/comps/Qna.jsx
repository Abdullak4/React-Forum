import React, { useEffect, useState } from 'react';
import './css/questions.css'; 
import Footer from "./Footer";
const Qna = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const result = await fetch("http://react-forum-nine.vercel.app
/blog");
            const data = await result.json();
            setPosts(data.reverse().slice(0, 10)); 
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <><div className="questions-container">
            <h1 className="questions-title">Tech questions</h1>
            {posts.map((post, index) => (
                <div className="questions-post" key={index}>
                    <h2 className="post-title">{post.Title}</h2>
                    <p className="post-content">{post.desc}</p>
                    <div className="post-info">
                        <p>
                            <strong>Author:</strong> {post.email} <br />
                            <strong>Date:</strong> {new Date(post.date).toLocaleString()}
                        </p>
                    </div>
                </div>
            ))}

        </div><Footer /></>
        
    );
};

export default Qna;
