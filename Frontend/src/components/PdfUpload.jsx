import React, { useState } from "react";
import axios from "axios";

const PdfUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  /* code  and event upload krne ke liye  */
  const handleUpload = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage("Please select a PDF file first.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const response = await axios.post(
        "https://mentors-connect-2.onrender.com/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "File upload failed.");
    }
  };

  return (
    /* code upload krne ke liye  */
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">
          Upload a PDF
        </h2>
        <form onSubmit={handleUpload} className="flex flex-col items-center">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Upload
          </button>
        </form>
        {message && <p className="mt-4 text-center text-gray-600"></p>}
      </div>
    </div>
  );
};

export default PdfUpload;
