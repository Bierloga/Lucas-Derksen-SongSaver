import './App.css';
import SongOverview from './Components/SongOverview';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'

function App() {
  return (
    <BrowserRouter>
      <div className='everything'>
        <Header />
        <Routes>
          <Route exact path="/" element={<SongOverview />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
