import './App.css';
import Navbar from './components/Navbar/Navbar';

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
        <h1>Player</h1>
      </div>
    </div>
  );
}

export default App;
