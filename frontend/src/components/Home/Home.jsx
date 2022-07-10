import React from "react";
import "./Home.css";

import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div>
          <h1>Hello @User!</h1>
        </div>
        <div className="display-grid">
          <div className="grid">
            <p>content</p>
          </div>
          <div className="grid"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
