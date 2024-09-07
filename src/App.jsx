import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import BlogSection from './Components/BlogSection';
import FooterSection from './Components/FooterSection';
import RegCardSection from './Components/RegCardSection';
import GallerySection from './Components/GallerySection';
import TestimonialsSection from './Components/TestimonialsSection';
import InstructorSection from './Components/InstructorSection';
import ServiceSection from './Components/ServiceSection';
import CounterSection from './Components/CounterSection';
import ClassIntroSection from './Components/ClassIntroSection';
import DanceClassSection from './Components/DanceClassSection';
import AboutSection from './Components/AboutSection';
import HeroSection from './Components/HeroSection';
import NavbarSection from './Components/NavbarSection';

function App() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <DanceClassSection />
      <ClassIntroSection />
      <CounterSection />
      <ServiceSection />
      <InstructorSection />
      <TestimonialsSection />
      <GallerySection />
      <RegCardSection />
      <BlogSection />
      <FooterSection />
    </>
  )
}

export default App
