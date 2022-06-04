import './App.css';
import Navbar from './components/Navbar/Navbar';
import Play from './components/Play/Play';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className='content'>
        <h1>Content</h1>
      </div>
      <div className='player'>
        <Play />
      </div>
    </div>
  );
}

export default App;
