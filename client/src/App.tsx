import {Routes, Route } from 'react-router-dom';
import './App.css'
import About from './pages/about'
import SignUp from './pages/signUp'
import Home from './pages/home';
import Contact from './pages/contact';
import { JSX } from 'react';

function App():JSX.Element {
  return (
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/signUp' element={<SignUp />}/>
     </Routes>
  )
}

export default App
