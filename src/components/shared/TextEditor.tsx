import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ReactQuillText = ({ value, setValue }: any) => {
  const [editorValue, setEditorValue] = useState("");

  const handleEditorChange = (value: any) => {
    setEditorValue(value);
  };

  console.log(editorValue);

  return (
    <div className="text-center mx-auto">
      <ReactQuill
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            [{ color: [] }, { background: [] }],
            ["link", "image"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "color",
          "background",
          "link",
          "image",
        ]}
        theme="snow"
        value={editorValue}
        style={{ maxHeight: "400px" }}
        onChange={handleEditorChange}
        placeholder={"Write Something..."}
        className="h-64 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <div>
        <h2>{editorValue}</h2>
        {/* <div dangerouslySetInnerHTML={{ __html: editorValue }} /> */}
      </div>
    </div>
  );
};

export default ReactQuillText;
