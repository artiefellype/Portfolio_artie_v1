import React from 'react';
import './styles/GlobalStyles.css';
import './styles'
import {Navbar, Main, About, Projects, Experience} from './components';

function App() {
  return (
    <>
        <Navbar />
        <Main />
        <About />
        <Projects />
        <Experience />
    </>
  );
}

export default App;
