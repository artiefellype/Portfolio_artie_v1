import React from 'react';
import './styles/GlobalStyles.css';
import './styles'
import {Navbar, Main, About, Projects} from './components';

function App() {
  return (
    <>
        <Navbar />
        <Main />
        <About />
        <Projects />
    </>
  );
}

export default App;
