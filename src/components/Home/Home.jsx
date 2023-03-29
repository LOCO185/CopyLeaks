// import React from "react";
import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import Navbar from "../Navbar/Navbar";
import "../Home/Home.css";
// import HtmlEditor from "../HtmlEditor/HtmlEditor";
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
      {/* <h1>Home page</h1> */}
      <div className="main">
        {/* <HtmlEditor /> */}
        <div
          className="editor"
          style={{
            // margin: "auto",
            maxWidth: 800,
            height: 500,
            // minHeight: "10vh",
            // maxHeight: "100vh",
            backgroundColor: "white",
          }}
        >
          <div ref={quillRef} />
          <button className="btn"> Submit </button>
        </div>
        {/* <div className="boxes"></div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
