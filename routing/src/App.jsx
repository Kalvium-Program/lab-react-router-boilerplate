
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Allroutes from './Components/Allroutes';

function App() {
 

  return (
    <>
     <Navbar/>
     <Allroutes/>
    </>
  )
}

export default App
