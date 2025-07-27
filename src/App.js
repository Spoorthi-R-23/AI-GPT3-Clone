import './App.css';
import {Route,Routes} from 'react-router-dom';
import { useMemo } from 'react';
import { createTheme} from '@mui/material/styles';
import {CssBaseline,ThemeProvider} from '@mui/material'
import { themeSettings } from './theme';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import ChatBot from './pages/ChatBot';
import JsConverter from './pages/JsConverter';
import ScifiImage from './pages/ScifiImage';

function App() {
  const theme=useMemo(()=>createTheme(themeSettings()),[]);
  return (
    <>
    <ThemeProvider theme ={theme}>
      <CssBaseline/>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/summary" element={<Summary/>}/>
        <Route path="/paragraph" element={<Paragraph/>}/>
        <Route path="/chatbot" element={<ChatBot/>}/>
        <Route path="/js-converter" element={<JsConverter/>}/>
        <Route path="/scifi-image" element={<ScifiImage/>}/>
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
