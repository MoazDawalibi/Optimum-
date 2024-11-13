import React from 'react'
import { Link } from 'react-router-dom';
import Footer2 from '../../layout/Footer'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1" />
      <div className="wave" id="wave2" />
      <div className="wave" id="wave3" />
      <div className="wave" id="wave4" />
    </div>
    <Footer2 />
  </footer>
  
  )
}

export default Footer