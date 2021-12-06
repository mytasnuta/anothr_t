import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index'
import RegistrationPage from './pages/register'
import CouseVideoLecture from './pages/singlecourse'
import Anter from './pages/another'
function App() {
  return (
      
    <Router>
   
      <Routes>
 
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<RegistrationPage/>} />
          <Route path="/singlepage" element={<CouseVideoLecture/>} />
          <Route path="/another" element={<Anter/>} />
      
      </Routes>
    </Router>
    );
     
   
    
  }


export default App;
