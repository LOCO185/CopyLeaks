import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import Navbar from "../Navbar/Navbar";
import "../Home/Home.css";
import Footer from "../Footer/Footer";

const Home = () => {
  const { quill, quillRef } = useQuill();
  const [value, setValue] = useState();

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill, quillRef]);

  return (
    <div>
      <Navbar />
      <div className="main">
        <div
          className="editor"
          style={{
            maxWidth: 800,
            height: 500,
            backgroundColor: "white",
          }}
        >
          <div ref={quillRef} />
          <button className="btn"> Submit </button>
        </div>
        <div className="boxes">
          <div className="first">
            <div className="div1"></div>
            <div className="div2"></div>
          </div>
          <div className="second">
            <div className="div3"></div>
            <div className="div4"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
