import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/Home';
import SuccessStoriesPage from './pages/SuccessStories';
import AboutUsPage from './pages/AboutUs';
import WhyUsPage from './pages/WhyUs';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
