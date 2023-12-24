import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'grey';
      showAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert('Light mode enabled', 'success');
    }
  };

  return (
    <>
        <BrowserRouter> 
        <Navbar title="Main page" mode={mode} toggleMode={toggleMode} />
        <Alert popalert={alert} />
        <Routes> 
        <Route path="/TextForm" element={<TextForm showAlert={showAlert} heading="Enter the text here " mode={mode} />}/>
        <Route path="/about" element={<About about="It is TextUtils coverts the text" />}/>

        </Routes>
        </BrowserRouter>
       
      </>
  );
}

export default App;
