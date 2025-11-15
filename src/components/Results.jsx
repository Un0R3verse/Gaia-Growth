import React from "react";
import axios from "axios";

export default function Results({ data }) {
  if (!data) return <p>No results yet.</p>;

  const downloadPdf = async () => {
    const res = await axios.post(
      "http://localhost:5000/generate-pdf",
      data,
      { responseType: "blob" }
    );

    const url = window.URL.createObjectURL(new Blob([res.data]));
    const a = document.createElement("a");
    a.href = url;
    a.download = "GaiaGrowth_Report.pdf";
    a.click();
  };

  return (
    <div className="card p-5 shadow w-100" style={{ maxWidth: "700px" }}>
      <h3 className="mb-3 text-center">AI Results & Recommendations</h3>

      <pre className="bg-light p-3 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>

      <button className="btn btn-outline-success mt-3 w-100" onClick={downloadPdf}>
        Download PDF Report
      </button>
    </div>
  );
}
