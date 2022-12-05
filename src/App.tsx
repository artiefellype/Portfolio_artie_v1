import React from 'react';
import './styles/GlobalStyles.css';
import './styles'
import {Navbar, Main, About} from './components';

function App() {
  return (
    <>
        <Navbar />
        <Main />
        <About />
    </>
  );
}

export default App;
