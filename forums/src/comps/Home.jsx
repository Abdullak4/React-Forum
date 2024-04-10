import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-bootstrap"; // Import Carousel component
import Footer from "./Footer";
import Cards from "./Cards";
import './css/Home.css';

const programmingLanguages = [
  { id: 1, title: "Python", description: "A high-level programming language.", img: "python.jpeg" },
  { id: 2, title: "C", description: "A procedural programming language.", img: "c.jpeg" },
  { id: 3, title: "JavaScript", description: "A programming language commonly used in web development.", img: "javascript.jpeg" },
  { id: 4, title: "Java", description: "A popular programming language known for its portability and performance.", img: "Java.jpeg" },
  { id: 5, title: "C++", description: "An object-oriented programming language derived from C.", img: "cpp.jpg" },
  { id: 6, title: "C#", description: "A programming language developed by Microsoft for building Windows applications.", img: "csharp.jpg" },
  { id: 7, title: "PHP", description: "A server-side scripting language commonly used for web development.", img: "php.jpg" },
  { id: 8, title: "Swift", description: "A programming language developed by Apple for iOS and macOS development.", img: "swift.jpg" },
  { id: 9, title: "TypeScript", description: "A superset of JavaScript that adds static typing to the language.", img: "typescript.jpg" }
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
