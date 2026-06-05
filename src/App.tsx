import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Packages from './components/Packages';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#050914', color: '#c0c8d8' }}>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Portfolio />
      <Packages />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
