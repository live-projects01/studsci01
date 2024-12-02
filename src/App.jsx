import { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Blogs from './pages/Blogs';
import Dummy from './pages/Dummy';
import 'flowbite/dist/flowbite.min.js';
import Gallery from './pages/Gallery';
import Search from './pages/Search';
import MainGallery from './pages/MainGallery';
import EventGallery from './pages/EventGallery';
import About from './pages/About';
import OurTeam from './pages/OurTeam';
import Check from './pages/Check';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Check/>}/>
          <Route path='/home' element={<Dummy/>}/>
          <Route path='/landing' element={<Landing/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/gallery' element={<MainGallery/>}/>
          <Route path='/egallery' element={<EventGallery/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/team' element={<OurTeam/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
