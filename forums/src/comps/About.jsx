import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function About() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const delay = 500;

    setTimeout(() => setIsVisible1(true), delay * 0);
    setTimeout(() => setIsVisible2(true), delay * 1.5);
    setTimeout(() => setIsVisible3(true), delay * 3);
  }, []);

  const bounce1 = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: isVisible1
      ? { opacity: 1, transform: "translateY(0px)" }
      : { opacity: 0, transform: "translateY(40px)" },
    config: config.wobbly,
  });

  const bounce2 = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: isVisible2
      ? { opacity: 1, transform: "translateY(0px)" }
      : { opacity: 0, transform: "translateY(40px)" },
    config: config.wobbly,
  });

  const bounce3 = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: isVisible3
      ? { opacity: 1, transform: "translateY(0px)" }
      : { opacity: 0, transform: "translateY(40px)" },
    config: config.wobbly,
  });

  const user = localStorage.getItem("email")
  return (
    <div style={{ background: "black" }}>
      <div
        className="video-background"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        >
          <source src="flexi2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        style={{
          background: `url("https://media.istockphoto.com/id/1418960998/photo/black-fabric.webp?b=1&s=170667a&w=0&k=20&c=7ys2K0OPpmJt4l5OoD_XHn0-XpNIRsa6yRSFirrzhRU=")`,
          color: "white",
          marginTop: "0px",
        }}
      >
        <h1>About Our Tech Forum</h1>
        <p>
          Welcome to our forums! We aim to provide a platform for discussions,
          sharing knowledge, and connecting with like-minded individuals. We are
          dedicated to fostering a community of technology enthusiasts,
          professionals, and learners alike. Our platform provides a space for
          meaningful discussions, knowledge sharing, and networking
          opportunities. Our mission is to create an inclusive and accessible
          environment where individuals from all backgrounds can engage with
          technology-related topics. We believe in the power of collaboration
          and aim to facilitate learning and growth within our community.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Discussion boards for various topics</li>
          <li>User profiles</li>
          <li>Vast range of topics</li>
          <li>Search functionality to find specific discussions</li>
        </ul>
        <h2>Our Team</h2>
        <p>
          Our forums are maintained by a dedicated team of moderators who ensure
          that discussions remain respectful and productive.
        </p>
        <h2>Join Us</h2>
      <p>
        Ready to join our community? {user ? "now to start engaging with fellow tech enthusiasts, asking questions, sharing your knowledge, and exploring the latest trends in technology." : <Link to="/signup">Sign up</Link> 
      } </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or feedback, feel free to contact us at
          support@techforums.com.
        </p>
        <div className="js-io-animation p-io-animation d-flex flex__allitems4 sm:fd-column gs48 pt64 jc-center mb64 sm:mb24 sm:pl12 sm:pr12">
          <animated.div
            className="flex--item is-ready p-io-animation__show"
            data-animation-type="show"
            style={bounce1}
          >
            <svg
              aria-hidden="true"
              className="mb12 fc-green-400 svg-icon iconApprove"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <path
                fill="#5EBA7D"
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm.25-3.45a1 1 0 0 1-.73.5c-.32 0-.62-.06-.85-.29l-3-3a1 1 0 0 1 1.44-1.38l2.05 2 3.56-6.28c.27-.47.89-.65 1.36-.38.47.27.65.89.38 1.36l-4.21 7.47Z"
              />
            </svg>
            <h3 className="p-ff-roboto-slab-bold fs-title mb12 fc-white d:fc-black">
              Increase productivity
            </h3>
            <p className="fs-body3 fc-black-350">
              If somebody somewhere has the right answer, suddenly you have it
              too. Collaborate better in a remote-first world.
            </p>
          </animated.div>

          <animated.div
            className="flex--item is-ready p-io-animation__show"
            data-animation-type="show"
            style={bounce2}
          >
            <svg
              aria-hidden="true"
              className="mb12 fc-green-400 svg-icon iconApprove"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <path
                fill="#5EBA7D"
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm.25-3.45a1 1 0 0 1-.73.5c-.32 0-.62-.06-.85-.29l-3-3a1 1 0 0 1 1.44-1.38l2.05 2 3.56-6.28c.27-.47.89-.65 1.36-.38.47.27.65.89.38 1.36l-4.21 7.47Z"
              />
            </svg>
            <h3 className="p-ff-roboto-slab-bold fs-title mb12 fc-white d:fc-black">
              Accelerate time to market
            </h3>
            <p className="fs-body3 fc-black-350">
              Shorten the time between initial idea and complete product. Take
              delays and misinformation out of the equation.
            </p>
          </animated.div>

          <animated.div
            className="flex--item is-ready p-io-animation__show"
            data-animation-type="show"
            style={bounce3}
          >
            <svg
              aria-hidden="true"
              className="mb12 fc-green-400 svg-icon iconApprove"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <path
                fill="#5EBA7D"
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm.25-3.45a1 1 0 0 1-.73.5c-.32 0-.62-.06-.85-.29l-3-3a1 1 0 0 1 1.44-1.38l2.05 2 3.56-6.28c.27-.47.89-.65 1.36-.38.47.27.65.89.38 1.36l-4.21 7.47Z"
              />
            </svg>
            <h3 className="p-ff-roboto-slab-bold fs-title mb12 fc-white d:fc-black">
              Protect institutional knowledge
            </h3>
            <p className="fs-body3 fc-black-350">
              People come and people go, but if you capture their contributions
              in one central place, that expertise sticks around.
            </p>
          </animated.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
