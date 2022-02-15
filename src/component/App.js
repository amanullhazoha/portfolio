import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Header from './header';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Home from './pages/home';
import Portfolio from './pages/portfolio';

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </Router>
);
export default App;
