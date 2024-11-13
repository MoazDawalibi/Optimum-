import React, { Suspense } from "react";
import { lazy } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import OnseServicesPage from "./pages/Services/OnseServicesPage";
import SingleServicePage from "./pages/SingleServices/SingleServicePage";
import UnderConst  from "./pages/Underconst/UnderConst"





export default function AppRoutes() {



  return (
    <Router>
  <Routes>
    
    <Route path="/home" element={<Home />} />
    <Route path="/onseServices/:id" element={<SingleServicePage />} />
    
    <Route path="/UnderConst" element={<UnderConst />} />

      {/* <Route path="/*" element={<NotFoundPage />} /> */}
    </Routes>
    
    </Router>
  
  );
}
