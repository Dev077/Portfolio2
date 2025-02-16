import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Academic from './pages/Academic';
import Personal from './pages/Personal';
import Hackathon from './pages/Hackathon';
import Reading from './pages/Reading';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/reading" element={<Reading />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;