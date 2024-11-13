import React from 'react'
import { FaCoffee } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Services_Card = ({name}) => {
  return (
    <div className="Services_Card">
      <div className="card">
        <div className='Image'><FaCoffee /></div>
        <h1 className='Title'> {name} </h1>
        <h4 className='Disc'>Company Small Details </h4>
        <Link to='/onseServices'>
        <button className="button">Read More</button>
        </Link>
      </div>
    </div>
  )
}

export default Services_Card