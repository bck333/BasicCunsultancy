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
import ProfileEvaluation from './main/ProfileEvaluation';
import Profile from './main/Profile';
import Career from './main/Carrer';
import CountrySelection from './main/CountrySelection';
import University from './main/University';
import Application from './main/Application';
import Admission from './main/Admission';
import Visa from './main/Visa';
import Accommodation from './main/Accommodation';
import Travel from './main/Travel';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
    <ScrollToTop/>
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
          <Route path="profile" element={<Profile />} />
          <Route path="career" element={<Career/>} />          
          <Route path="course" element={<CountrySelection/>} />          
          <Route path="university" element={<University/>} />
          <Route path="application" element={<Application/>} />
          <Route path="admission" element={<Admission/>} />
          <Route path="visa" element={<Visa/>} />
          <Route path="travel" element={<Travel/>} />
          <Route path="accommodation" element={<Accommodation/>} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;


