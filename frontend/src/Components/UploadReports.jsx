import React, { useState, useRef } from 'react'
import { toast} from "react-toastify";

const UploadReports = () => {

  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChage = (e) => {
    setFiles((prev) => [...prev, ...Array.from(e.target.files)]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (files.length === 0) {
      toast.error("Please select a file first!");
      setIsLoading(false);
      return;
    }
    try {
      const fileInput = e.target.querySelector('input[name="file"]');
      const formDataObj = new FormData();
      formDataObj.append("date", formData.date || "");
      formDataObj.append("disease", formData.disease || "");
      formDataObj.append("doctorName", formData.doctorName || "");
      formDataObj.append("hospitalName", formData.hospitalName || "");
      formDataObj.append("expenditure", formData.expenditure || "");
      formDataObj.append("remark", formData.remark || "");
      for (let i = 0; i < files.length; i++) {
        formDataObj.append("files", files[i]);
      }

      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:3000/user/upload-reports", {
        method: "POST",
        body: formDataObj,
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log(data);
      toast.success("Report uploaded successfully!");
      formRef.current.reset();
      setFiles([]);

    } catch (err) {

      console.error(err);
      toast.error("Failed to upload report!");

    } finally {

      setIsLoading(false);

    }
  };

  return (
    <div className="mt-28 m-16 flex justify-center text-center flex-col border-2 border-healthcare-primary shadow-healthcare-secondary shadow-md rounded-2xl p-3 font-semibold">
      <h1 className="p-5 font-bold text-5xl text-healthcare-primary">Upload Your Medical Records here</h1>
      <div className="flex justify-center p-5 font-semibold">
        <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col m-2 w-full max-w-md  border-2 border-healthcare-primary shadow-healthcare-secondary shadow-md rounded-2xl p-5">
          <input className="p-2 m-2 rounded-md border-2 border-healthcare-primary" type="date" placeholder='Date' name="date" onChange={handleChange} ></input>
          <input className="p-2 m-2 rounded-md border-2 border-healthcare-primary" type="text" placeholder="Disease" name="disease" onChange={handleChange}></input>
          <input className="p-2 m-2 rounded-md border-2 border-healthcare-primary" type="text" placeholder="Doctor Name" name="doctorName" onChange={handleChange}></input>
          <input className="p-2 m-2 rounded-md border-2 border-healthcare-primary" type="text" placeholder="Hospital Name" name="hospitalName" onChange={handleChange}></input>
          <input className="p-2 m-2 rounded-md border-2 border-healthcare-primary" type="number" placeholder="Expenditure In Thousands" name="expenditure" onChange={handleChange}></input>
          <textarea className="p-2 m-2 rounded-md border-2 border-healthcare-primary" type="text" placeholder="Remark" name="remark" onChange={handleChange}></textarea>
          <input className="p-2 m-2 rounded-md " type="file" name="file" multiple onChange={handleFileChage}></input>

          <h3 className="font-bold flex p-1">Selected Files :</h3>
          {files.map((file, index) => (
            <ul className="flex p-1">
              <li key={index}>{file.name}</li>
            </ul>
          ))}
          <button type="submit" className="border-2 border-healthcare-primary shadow-healthcare-secondary shadow-md rounded-2xl p-3 font-semibold hover:cursor-pointer hover:underline m-2" disabled={isLoading}>{isLoading ? "Uploading..." : "Upload"}</button>
        </form>

      </div>
    </div>
  )
}

export default UploadReports
