import { useState } from 'react';
import './App.css';
import Home from './pages/home'
import Contact from './pages/contact';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Navbar from './components/navbar';
import Footer from './components/footer';


function App() {
  const [view, setView] = useState('home')

  const renderView = () => {
    if (view === 'home') {
      return <Home />
    } else if (view === 'projects') {
      return <Projects />
    } else if (view === 'contact') {
      return <Contact />
    } else if (view === 'resume') {
      return <Resume />
    } else {
      return 'Page not found :('
    }
  }


  return (
    <>
      <Navbar
        view={view}
        setView={setView}   
      />
      {renderView()}
      <Footer />

    </>
  );
}

export default App;
