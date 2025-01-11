import { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import OldLanding from './pages/OldLanding.jsx'
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
import Demoweekly from './pages/Demoweekly.jsx';
import LocInput from './pages/Locinput.jsx';
import Report from './pages/Report.jsx';
import LocInput2 from './pages/LocInput2.jsx'
import Report2 from './pages/Report2.jsx';
import LoginPage from './newpages/LoginPage.jsx';
import StudentDash from './newpages/StudentDash.jsx';
import StudentDash2 from './newpages/StudentDash2.jsx';
import ModDash from './newpages/ModDash.jsx';
import ModDash2 from './newpages/ModDash.jsx';
import Modtest from './newpages/modtest.jsx';
import Modcheck from './newpages/Modcheck.jsx';
import Modbest from './newpages/Modbest.jsx'
import CollegeAdmin from './newpages/CollegeAdmin.jsx';
import ModeratorRegister from './newpages/ModeratorRegister.jsx';
import SchoolAdmin from './newpages/SchoolAdmin.jsx';
import MapTest from './newpages/MapTest.jsx';
import ImageUploadForm from './newpages/ImageUploadForm.jsx';
import ImageCheck from './newpages/ImageCheck.jsx';
import TestUpload from './newpages/TestUpload.jsx';
import TestGet from './newpages/TestGet.jsx';
import EventUpload from './newpages/EventUpload.jsx';
import EventSlider from './newpages/EventSlider.jsx';
import EventUpload1 from './newpages/EventUpload1.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Check/>}/>
          <Route path='/home' element={<Dummy/>}/>
          <Route path='/oldlanding' element={<OldLanding/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/gallery' element={<MainGallery/>}/>
          <Route path='/egallery' element={<EventGallery/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/team' element={<OurTeam/>}/>
          <Route path='/weekly' element={<Demoweekly/>}/>
          <Route path='/loc' element={<LocInput/>}/>
          <Route path='/loc2' element={<LocInput2/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/StudentDash' element={<StudentDash2/>}/> 
          <Route path='/ModDash' element={<ModDash/>}/>
          <Route path='/ModDash2' element={<ModDash2/>}/>
          <Route path='/Modtest' element={<Modtest/>}/> {/*GOOD REJECTION UI  */}
          <Route path='/Modcheck' element={<Modcheck/>}/> {/*MOD CHECK WORKS REJECTION PERFECTLY */}
          <Route path='/Modbest' element={<Modcheck/>}/> {/* MOD BEST WORKS BEST !!! */}
          <Route path='/CollegeAdmin' element={<CollegeAdmin/>}/>
          <Route path='/ModReg' element={<ModeratorRegister/>}/>
          <Route path='/SchoolAdmin' element={<SchoolAdmin/>}/>
          <Route path='/MapTest' element={<MapTest/>}/>
          <Route path='/kioskupload' element={<ImageUploadForm/>}/>
          <Route path='/imagecheck' element={<ImageCheck/>}/>
          <Route path='/testupload' element={<TestUpload/>}/> {/*SUPABASE BEST PAGE FOR UPLOAD */}
          <Route path='/testget' element={<TestGet/>}/> {/* SUPABASE BEST PAGE FOR FETCH */}
          <Route path='/eventupload' element={<EventUpload/>}/> 
          <Route path='/eventslider' element={<EventSlider/>}/> {/* BEST EVENT SLIDER FROM SUPABASE */}
          <Route path='/eventupload1' element={<EventUpload1/>}/>{/*BEST EVENT UPLOADER TO SUPABASE */}
          






          <Route path="/report/:locationName" element={<Report />} />
          <Route path="/report2/:locationName/:dataType" element={<Report2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
