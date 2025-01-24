import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
// import { Home } from '. /pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Universities } from './pages/Universities';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';
import { NotFound } from './pages/NotFound';
import { Blogs } from './pages/Blogs';
import Basic from './pages/Basic';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="universities" element={<Universities />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="basic" element={<Basic />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;