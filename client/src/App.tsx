import {Routes, Route } from 'react-router-dom';
import './App.css'
import About from './pages/about'
import SignUp from './pages/signUp'
import Home from './pages/home';
import Contact from './pages/contact';
import { JSX } from 'react';
import Forgotpassword from './pages/forgotpassword';
import UserLogin from './pages/userlogin';
import UserContact from './components/contact/usercontact';

function App():JSX.Element {
  return (
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/signUp' element={<SignUp />}/>
      <Route path='/userlogin' element={<UserLogin />}/>
      <Route path='/forgotpassword' element={<Forgotpassword />} />
      <Route path='/userContact' element={<UserContact />} />
     </Routes>
  )
}

export default App
