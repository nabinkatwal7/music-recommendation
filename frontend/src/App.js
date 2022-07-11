import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import Library from "./components/library/Library";
import Recommendation from "./components/recommendation/Recommendation";
import Search from "./components/search/Search";
import User from "./components/user/User";
import Home from "./components/Home/Home";

function App() {
  // const CLIENT_ID = "12824720980943c684531a5514a21114";
  // const REDIRECT_URI = "http://localhost:3000";
  // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  // const RESPONSE_TYPE = "token";

  // const [token, setToken] = useState("");

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem("token");

  //   if (!token && hash) {
  //     token = hash
  //       .substring(1)
  //       .split("&")
  //       .find((elem) => elem.startsWith("access_token"))
  //       .split("=")[1];

  //     window.location.hash = "";
  //     window.localStorage.setItem("token", token);
  //   }
  //   setToken(token);
  // }, []);

  // const logout = () => {
  //   setToken("");
  //   window.localStorage.removeItem("token");
  // };

  return (
    <div className="App">
      {/* <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
      {/* {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )} */}
    </div>
  );
}

export default App;
