import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './components/TextForm';
import React, {useState } from 'react';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#252422';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>

    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
    </div>
    
    <div className='container  my-4'>
      <TextForm heading= "Enter the text to analyze" mode={mode} />
      {/* <About/> */}
    </div>
    </>

  );
}

App.propTypes = {
  title: PropTypes.string
}

export default App;
