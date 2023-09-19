import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './routes/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
