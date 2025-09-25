import React, { useEffect, useState } from 'react'

const ViewReports = () => {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:3000/user/view-reports", {
          method: "GET",
          credentials: "include",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (!res.ok) throw new Error("Failed to fetch reports");
        const data = await res.json();
        setReports(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="mt-28 m-16 rounded-2xl p-6 bg-white border border-healthcare-primary/10 shadow-lg">
      <h1 className="text-5xl font-bold text-healthcare-text flex justify-center">Your Reports</h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div key={report._id} className="p-5 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover-lift transition-all bg-white">
            <p><b>Date:</b> {report.date}</p>
            <p><b>Disease:</b> {report.disease}</p>
            <p><b>Doctor:</b> {report.doctorName}</p>
            <p><b>Hospital:</b> {report.hospitalName}</p>
            <p><b>Expenditure:</b> {report.expenditure}k</p>
            <p><b>Remark:</b> {report.remark}</p>
            {report.upload.map((file, index) => (
              <ul key={index}>
                <li>
                  <a
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-healthcare-primary hover:underline"
                  >
                    View File {index+1}
                  </a>
                </li>
              </ul>
            ))}

          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewReports
