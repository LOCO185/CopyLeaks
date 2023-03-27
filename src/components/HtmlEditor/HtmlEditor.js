import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import "./styles.css";

function HtmlEditor() {
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

  // console.log(value, "this is quill editor");
  return (
    <div className="container">
      <div
        className="editor"
        style={{ width: 800, height: 500, backgroundColor: "white" }}
      >
        <div ref={quillRef} />
      </div>
    </div>
  );
}
export default HtmlEditor;
