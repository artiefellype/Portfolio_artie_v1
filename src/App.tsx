import React from 'react';
import './styles/GlobalStyles.css';
import './styles'
import {Navbar, Main, About, Projects, Experience, Contact, Footer} from './components';

function App() {
  return (
    <>
        <Navbar />
        <Main />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
