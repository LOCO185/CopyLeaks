import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Home/Home.css";
import HtmlEditor from "../HtmlEditor/HtmlEditor";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home page</h1>
      <div className="container">
        <HtmlEditor />
        <div className="boxes">
          <div className="first-row">
            <div className="div1"></div>
            <div className="div2"></div>
          </div>
          <div className="second-row">
            <div className="div3"></div>
            <div className="div4"></div>
          </div>
        </div>
      </div>
      <button className="btn"> Submit </button>
      <Footer />
    </div>
  );
};

export default Home;
