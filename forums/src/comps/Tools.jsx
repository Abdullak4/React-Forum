import React from 'react';
import ToolCard from './ToolCard';
import './css/Tools.css';

const Tools = () => {
  return (
    <div className="tools-container">
      <h1 className='p-head'>PROGRAMMING TOOLS</h1>
      <div className="tool-list">
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
          <ToolCard
            name="Visual Studio Code"
            description="A lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS, and Linux."
            imageSrc="cas2.jpg"
          />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <ToolCard
            name="GitHub"
            description="A platform for hosting and collaborating on Git repositories. It provides version control and team collaboration features."
            imageSrc="github.png"
          />
        </a>
        <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">
          <ToolCard
            name="Sublime Text"
            description="A sophisticated text editor for code, markup, and prose. It offers a wide range of features, including a command palette, multiple selections, and syntax highlighting."
            imageSrc="sublime.webp"
          />
        </a>
        <a href="https://atom.io/" target="_blank" rel="noopener noreferrer">
          <ToolCard
            name="Atom"
            description="A hackable text editor for the 21st century built on Electron. It provides support for plugins written in Node.js and embedded Git Control."
            imageSrc="atom.png"
          />
        </a>
        <a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">
          <ToolCard
            name="PyCharm"
            description="An integrated development environment (IDE) used in computer programming, specifically for the Python language. It offers code analysis, graphical debugger, and integration with version control systems."
            imageSrc="pycharm.jpeg"
          />
        </a>
        <a href="https://visualstudio.microsoft.com/" target="_blank" rel="noopener noreferrer">
          <ToolCard
            name="Visual Studio"
            description="An integrated development environment (IDE) from Microsoft. It supports various programming languages and provides features like IntelliSense, debugging, and Git integration."
            imageSrc="vs.jpeg"
          />
        </a>
        <a href="https://www.eclipse.org/" target="_blank" rel="noopener noreferrer">
          <ToolCard
            name="Eclipse"
            description="An open-source integrated development environment (IDE) primarily used for Java development. It supports other programming languages through plugins."
            imageSrc="eclipse.png"
          />
        </a>
        <a href="https://netbeans.apache.org/" target="_blank" rel="noopener noreferrer">
          <ToolCard
            name="NetBeans"
            description="An integrated development environment (IDE) for Java development, but also supports other languages like PHP, C/C++, and HTML5. It offers features like code templates, refactoring, and code generation."
            imageSrc="netbeans.jpeg"
          />
        </a>
        <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer">
          <ToolCard
            name="IntelliJ IDEA"
            description="An integrated development environment (IDE) for Java development, but also supports various other languages like Kotlin, Groovy, and Scala. It provides intelligent code assistance, refactorings, and built-in tools."
            imageSrc="ij.jpeg"
          />
        </a>
        <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer">
          <ToolCard
            name="Xcode"
            description="An integrated development environment (IDE) for macOS used for developing software for macOS, iOS, iPadOS, watchOS, and tvOS. It includes a visual interface builder, code editor, and debugging tools."
            imageSrc="xcode.jpg"
          />
        </a>
        <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">
          <ToolCard
            name="WebStorm"
            description="A powerful JavaScript IDE for modern web development. It provides smart coding assistance, built-in tools for debugging, testing, and version control integration."
            imageSrc="web-storm.png"
          />
        </a>
        <a href="https://www.jetbrains.com/phpstorm/" target="_blank" rel="noopener noreferrer">
          <ToolCard
            name="PhpStorm"
            description="An intelligent PHP IDE designed to maximize developer productivity. It provides code completion, refactorings, on-the-fly error prevention, and other features."
            imageSrc="phptorn.png"
          />
        </a>
      </div>
    </div>
  );
};

export default Tools;
