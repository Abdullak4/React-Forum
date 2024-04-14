import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-bootstrap"; // Import Carousel component
import Footer from "./Footer";
import Cards from "./Cards";
import './css/Home.css';

const programmingLanguages = [
  
    { "id": 1, "title": "Python", "description": "Python is a high-level programming language known for its simplicity and readability. It is widely used in various domains such as web development, data science, artificial intelligence, and more.", "img": "python.jpeg" },
    { "id": 2, "title": "C", "description": "C is a procedural programming language initially developed for system programming. It is highly efficient and widely used in developing operating systems, embedded systems, and other performance-critical software applications.", "img": "c.jpeg" },
    { "id": 3, "title": "JavaScript", "description": "JavaScript is a versatile programming language primarily used for web development. It enables dynamic and interactive content on websites and is supported by all modern web browsers.", "img": "javascript.jpeg" },
    { "id": 4, "title": "Java", "description": "Java is a robust and platform-independent programming language commonly used for building enterprise-scale applications. It is known for its portability, performance, and extensive ecosystem of libraries and frameworks.", "img": "Java.jpeg" },
    { "id": 5, "title": "C++", "description": "C++ is an extension of the C programming language with added support for object-oriented programming. It is widely used in developing system software, game engines, and high-performance applications.", "img": "cpp.jpg" },
    { "id": 6, "title": "C#", "description": "C# is a versatile programming language developed by Microsoft. It is widely used for building Windows applications, web applications, and game development using the Unity game engine.", "img": "csharp.jpg" },
    { "id": 7, "title": "PHP", "description": "PHP is a server-side scripting language commonly used for web development. It is particularly well-suited for creating dynamic web pages and interacting with databases.", "img": "php.jpg" },
    { "id": 8, "title": "Swift", "description": "Swift is a modern programming language developed by Apple for building iOS, macOS, watchOS, and tvOS applications. It is designed to be safe, fast, and expressive.", "img": "swift.jpg" },
    { "id": 9, "title": "TypeScript", "description": "TypeScript is a superset of JavaScript that adds static typing to the language. It aims to enhance JavaScript development by enabling better code organization, maintainability, and scalability.", "img": "typescript.jpg" },
    { "id": 10, "title": "Rust", "description": "Rust is a systems programming language focused on safety, performance, and concurrency. It is designed to prevent common programming errors without sacrificing efficiency.", "img": "rust.jpg" },
    { "id": 11, "title": "Next.js", "description": "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications. It simplifies the creation of complex React applications by providing built-in features and conventions.", "img": "next.png" },
    { "id": 12, "title": "Ruby", "description": "Ruby is a dynamic, object-oriented programming language known for its simplicity and productivity. It is commonly used for web development, particularly with the Ruby on Rails framework.", "img": "ruby.png" }
  
  
];


export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search');
    setSearchTerm(search || '');
  }, [location.search]);

  useEffect(() => {
    const filteredResult = programmingLanguages.filter((language) =>
      language.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredCards(filteredResult);
  }, [searchTerm]);

  return (
    <div className="home">
      <div className="pic">
        <h1 className="homeText"> Forums</h1>
        <Carousel interval={3000}> 
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cas9.gif"
              alt="First slide"
              style={{ height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <video
              title="Flexi Video"
              width="100%"
              height="500"
              autoPlay
              muted
              controls
              loop
            >
              <source src="flexi.mp4" type="video/mp4" />
              
            </video>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cas4.jpg"
              alt="First slide"
              style={{ height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cas10.gif"
              alt="First slide"
              style={{ height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cas5.jpg"
              alt="First slide"
              style={{ height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cas7.gif"
              alt="First slide"
              style={{ height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cas6.jpg"
              alt="First slide"
              style={{ height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cas1.jpg"
              alt="First slide"
              style={{ height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cas3.jpeg"
              alt="First slide"
              style={{ height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cas2.jpg"
              alt="First slide"
              style={{ height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cas8.gif"
              alt="First slide"
              style={{ height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="cas11.gif"
              alt="First slide"
              style={{ height: "500px" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <iframe
              title="YouTube Video"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/0lbzmZeS-BY?autoplay=1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Carousel.Item>
          




          {/* Add more Carousel.Item components for additional slides */}
        </Carousel>
        <input
          className="form-control me-2 homeSearch"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Cards cards={filteredCards.length > 0 ? filteredCards : programmingLanguages} />
      </div>
      <Footer />
    </div>
  );
}
