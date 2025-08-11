
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TechnologyPage from './pages/TechnologyPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ScamEducationPage from './pages/Learnpage';
import PreventionPage from './pages/PreventionPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/About/technology" element={<TechnologyPage />} />
        <Route path="/Blog" element={<ScamEducationPage />} />
        <Route path="/scam-education/prevention" element={<PreventionPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;