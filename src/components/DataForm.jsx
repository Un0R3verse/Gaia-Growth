import React, { useState } from "react";
import axios from "axios";

export default function DataForm({ onSubmit }) {
  const [form, setForm] = useState({
    cropType: "",
    ph: "",
    moisture: "",
    location: "",
    plotSize: ""
  });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/analyze", form);
      onSubmit(res.data);
    } catch (err) {
      console.error("Error analyzing data", err);
    }
  };

  return (
    <form className="card p-5 shadow w-100" style={{ maxWidth: "600px" }} onSubmit={submit}>
      <h4 className="mb-4 text-center">Enter Field Data</h4>

      <div className="mb-3">
        <label>Crop Type</label>
        <input
          name="cropType"
          className="form-control"
          onChange={update}
          required
        />
      </div>

      <div className="mb-3">
        <label>Soil pH</label>
        <input
          name="ph"
          type="number"
          step="0.1"
          className="form-control"
          onChange={update}
          required
        />
      </div>

      <div className="mb-3">
        <label>Moisture (%)</label>
        <input
          name="moisture"
          type="number"
          className="form-control"
          onChange={update}
          required
        />
      </div>

      <div className="mb-3">
        <label>Location</label>
        <input
          name="location"
          className="form-control"
          onChange={update}
          required
        />
      </div>

      <div className="mb-3">
        <label>Plot Size (acres)</label>
        <input
          name="plotSize"
          type="number"
          className="form-control"
          onChange={update}
          required
        />
      </div>

      <button className="btn btn-success w-100 mt-3">Run Analysis</button>
    </form>
  );
}
