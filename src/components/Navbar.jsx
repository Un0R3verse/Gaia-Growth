import React from "react";

export default function Navbar({ onNavigate }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">GaiaGrowth</a>
        <div className="navbar-nav ms-auto">
          <button className="nav-link btn btn-link text-light" onClick={() => onNavigate("dashboard")}>Dashboard</button>
          <button className="nav-link btn btn-link text-light" onClick={() => onNavigate("form")}>Input Data</button>
        </div>
      </div>
    </nav>
  );
}
