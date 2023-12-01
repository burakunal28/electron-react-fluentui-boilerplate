import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import Footer from './components/footer/Footer';
import './App.css';

const App: React.FC = () => {

  return (
    <Router>
      <Navbar /> 
      <Sidebar  />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;