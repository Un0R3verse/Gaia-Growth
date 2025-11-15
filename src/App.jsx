import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import DataForm from "./components/DataForm";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("dashboard");
  const [results, setResults] = useState(null);

  return (
    <>
      <Navbar onNavigate={setPage} />

      {/* Dashboard page - full width */}
      {page === "dashboard" && <Dashboard onStart={() => setPage("form")} />}

      {/* DataForm page - full viewport, centered */}
      {page === "form" && (
        <div className="d-flex align-items-center justify-content-center w-100" style={{ minHeight: "100vh" }}>
          <DataForm
            onSubmit={(res) => {
              setResults(res);
              setPage("results");
            }}
          />
        </div>
      )}

      {/* Results page - full viewport, centered */}
      {page === "results" && (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
          <Results data={results} />
        </div>
      )}

      <img src="photo.jpg" class="left-img"></img>

      <Footer />
    </>
  );
}

export default App;
