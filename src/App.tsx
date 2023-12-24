import React from 'react';
import { Header } from './views/components/header';
import { Footer } from './views/components/footer';
import DashBoard  from './views/modules/Dashboard';
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
 <Router>
    <div className="App">
    <Header/>
         <Routes>
         
          <Route path="/home" element={<DashBoard />} />
          <Route path="/" element={<DashBoard />} />
    </Routes>
     
      <Footer /> 
    </div>
     </Router>
  );
}
