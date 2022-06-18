import './App.css';

import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content'
import Player from './components/player/Player'

function App() {
  return (
      <div className="App">
        <Navbar />
        <Content />
        <Player />
      </div>
  );
}

export default App;
