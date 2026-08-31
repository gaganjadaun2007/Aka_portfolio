import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfo } from './components/QuickInfo';
import { About } from './components/About';
import { HowIWork } from './components/HowIWork';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { ThemeProvider } from './hooks/useTheme';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen theme-transition">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <QuickInfo />
          
          <About />
          <HowIWork />
          <Skills />
          
          <Projects />
          
          <Journey />
          <CurrentlyLearning />
          
          <ResumeCTA />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
