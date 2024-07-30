import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Layout/Navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home.js';
import Register from './components/Pages/Register.js';
import Gallary from './components/Pages/Gallary.js';
import About from './components/Pages/About.js';
import Show from './components/Pages/Show.js';
import Update from './components/Pages/Update.js';
import Delete from './components/Pages/Delete.js';
import ErrorPage from './components/Pages/ErrorPage.js';


function App() {
  return (
    <div>
      <BrowserRouter>
           <Navbar/>
           
           <Routes>
               <Route path='/' element={<Home/>}></Route>
               <Route path='/home' element={<Home/>}></Route>
               <Route path='/about' element={<About/>}></Route>
               <Route path='/gallary' element={<Gallary/>}></Route>
               <Route path='/register' element={<Register/>}></Route>
               <Route path='/show' element={<Show/>}></Route>
               <Route path='/update/student/:studentID' element={<Update/>}></Route>
               <Route path='/delete/student/:studentID' element={<Delete/>}></Route>
               <Route path='*' element={<ErrorPage/>}></Route>
               {/* wildcard route character - */}
           </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
