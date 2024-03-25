import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import pages 
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

// import components

import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Error id="someId" />} />
      </Routes>
    </Router>
  );
}

export default App;
