import React from "react";

export default function Dashboard({ onStart }) {
  return (
    <div className="w-100 bg-success text-white py-5">
      <div className="text-center px-0 mx-0">
        <h1 className="mb-3 display-4">Welcome to GaiaGrowth</h1>
        <p className="lead">
          Smart, AI-powered crop optimization to help farmers grow healthier plants.
        </p>
        <button className="btn btn-light btn-lg mt-3" onClick={onStart}>
          Analyze My Field
        </button>
      </div>
    </div>
  );
}
