import { Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import OurServices from './pages/OurServices/OurServices';
import Pricing from './pages/Pricing/Pricing';
import Company from './pages/Company/Company';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/company" element={<Company />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
