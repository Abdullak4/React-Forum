import React from 'react';
import './css/Blog.css'; 
import Footer from './Footer';

const Blog = () => {
  return (
    <><div className="blog-container">
      <h1 className="blog-title">Tech Blog</h1>

      <div className="blog-post">
        <h2 className="post-title">C Programming Basics: Variables and Functions</h2>
        <p className="post-content">
          C is a powerful general-purpose programming language. This post covers the basics of C programming, including variables, data types, and functions.
        </p>
        <div className="post-info">
          <p>
            <strong>Author:</strong> Rahul Sharma <br />
            <strong>Date:</strong> April 3, 2024
          </p>
        </div>
      </div>

      <div className="blog-post">
        <h2 className="post-title">C++ Programming Basics: Classes and Objects</h2>
        <p className="post-content">
          C++ is an extension of the C programming language and adds support for object-oriented programming. This post covers the basics of C++ programming, including classes and objects.
        </p>
        <div className="post-info">
          <p>
            <strong>Author:</strong> Priya Patel <br />
            <strong>Date:</strong> April 4, 2024
          </p>
        </div>
      </div>

      <div className="blog-post">
        <h2 className="post-title">Java Programming Basics: Classes and Inheritance</h2>
        <p className="post-content">
          Java is a popular programming language used for developing desktop, web, and mobile applications. This post covers the basics of Java programming, including classes and inheritance.
        </p>
        <div className="post-info">
          <p>
            <strong>Author:</strong> Rohit Verma <br />
            <strong>Date:</strong> April 5, 2024
          </p>
        </div>
      </div>

      <div className="blog-post">
        <h2 className="post-title">HTML Basics: Introduction to Web Development</h2>
        <p className="post-content">
          HTML (Hypertext Markup Language) is the standard markup language for creating web pages. This post covers the basics of HTML, including tags, elements, and structure.
        </p>
        <div className="post-info">
          <p>
            <strong>Author:</strong> Neha Gupta <br />
            <strong>Date:</strong> April 6, 2024
          </p>
        </div>
      </div>

      <div className="blog-post">
        <h2 className="post-title">CSS Basics: Styling Web Pages</h2>
        <p className="post-content">
          CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. This post covers the basics of CSS, including selectors, properties, and values.
        </p>
        <div className="post-info">
          <p>
            <strong>Author:</strong> Anjali Singh <br />
            <strong>Date:</strong> April 7, 2024
          </p>
        </div>
      </div>

      <div className="blog-post">
        <h2 className="post-title">Python Basics: Control Structures and Functions</h2>
        <p className="post-content">
          Python is a high-level, interpreted programming language known for its simplicity and readability. This post covers the basics of Python programming, including control structures and functions.
        </p>
        <div className="post-info">
          <p>
            <strong>Author:</strong> Vivek Kumar <br />
            <strong>Date:</strong> April 8, 2024
          </p>
        </div>
      </div>

      {/* Additional valuable content */}
      <div className="blog-post">
        <h2 className="post-title">JavaScript ES6 Features</h2>
        <p className="post-content">
          ES6 (ECMAScript 2015) introduced many new features to JavaScript, making it more powerful and expressive. This post covers key ES6 features such as arrow functions, template literals, and destructuring assignment.
        </p>
        <div className="post-info">
          <p>
            <strong>Author:</strong> David Johnson <br />
            <strong>Date:</strong> April 9, 2024
          </p>
        </div>
      </div>

      <div className="blog-post">
        <h2 className="post-title">Responsive Web Design Principles</h2>
        <p className="post-content">
          Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. This post explores the principles of responsive web design and techniques for creating responsive layouts.
        </p>
        <div className="post-info">
          <p>
            <strong>Author:</strong> Sarah Adams <br />
            <strong>Date:</strong> April 10, 2024
          </p>
        </div>
      </div>

      {/* Additional blog posts for other programming languages */}
      <div className="blog-post">
        <h2 className="post-title">PHP Basics: Introduction to Server-Side Scripting</h2>
        <p className="post-content">
          PHP is a server-side scripting language commonly used for web development. This post covers the basics of PHP, including syntax, variables, and control structures, and explains how to use PHP to create dynamic web pages.
        </p>
        <div className="post-info">
          <p>
            <strong>Author:</strong> Michael Clark <br />
            <strong>Date:</strong> April 11, 2024
          </p>
        </div>
      </div>

      <div className="blog-post">
        <h2 className="post-title">Ruby Basics: Understanding Ruby Programming Language</h2>
        <p className="post-content">
          Ruby is a dynamic, object-oriented programming language known for its simplicity and productivity. This post covers the basics of Ruby programming, including syntax, data types, and control structures, and provides examples to help beginners get started with Ruby.
        </p>
        <div className="post-info">
          <p>
            <strong>Author:</strong> Jessica Lee <br />
            <strong>Date:</strong> April 12, 2024
          </p>
        </div>
      </div>

      {/* Add more blog posts for other programming languages as needed */}


      {/* Additional blog posts for other programming languages */}
      <div className="blog-post">
        <h2 className="post-title">PHP Basics: Introduction to Server-Side Scripting</h2>
        <p className="post-content">
          PHP is a server-side scripting language commonly used for web development. This post covers the basics of PHP, including syntax, variables, and control structures, and explains how to use PHP to create dynamic web pages.
        </p>
        <div className="post-info">
          <p>
            <strong>Author:</strong> Michael Clark <br />
            <strong>Date:</strong> April 11, 2024
          </p>
        </div>
      </div>

      <div className="blog-post">
        <h2 className="post-title">Ruby Basics: Understanding Ruby Programming Language</h2>
        <p className="post-content">
          Ruby is a dynamic, object-oriented programming language known for its simplicity and productivity. This post covers the basics of Ruby programming, including syntax, data types, and control structures, and provides examples to help beginners get started with Ruby.
        </p>
        <div className="post-info">
          <p>
            <strong>Author:</strong> Jessica Lee <br />
            <strong>Date:</strong> April 12, 2024
          </p>
        </div>
      </div>

      {/* Add more blog posts for other programming languages as needed */}


      {/* Add more blog posts as needed */}

    </div><Footer /></>
  );
};

export default Blog;
