import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content'
import Player from './components/player/Player'
import Library from './components/library/Library'
import Recommendation from './components/recommendation/Recommendation'
import Search from './components/search/Search'
import User from './components/user/User'
import Home from './components/Home/Home'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/search' element={<Search />} />
            <Route path ='/library' element={<Library />} />
            <Route path ='/recommendation' element={<Recommendation />} />
            <Route path ='/user' element={<User />} />
          </Routes>
        </BrowserRouter>
        <Content />
        <Player /> 
      </div>
  );
}

export default App;
