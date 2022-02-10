import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './dashboard/dashbordLayout';
import Header from './header';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Home from './pages/home';
import Portfolio from './pages/portfolio';

const App = () => {
    const dashbord = window.location.pathname;

    return (
        <Router>
            {dashbord.slice(1, 10) === 'dashboard' ? <DashboardLayout /> : <Header />}
            <Routes>
                <Route path="/">
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<Home />} />
                </Route>

                <Route path="/dashboard">
                    <Route path="/dashboard/message" element={<h1>message</h1>} />
                    <Route path="/dashboard/project" element={<h1>project</h1>} />
                    <Route path="/dashboard/blog" element={<h1>blog</h1>} />
                </Route>
            </Routes>
        </Router>
    );
};
export default App;
