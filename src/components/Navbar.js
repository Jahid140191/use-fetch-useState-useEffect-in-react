import React from 'react'
import {Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <div className="nav-container">
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/post'>Post</Link>
            <Link className='link' to='/todo'>Todo</Link>
            <Link className='link' to='/user'>User</Link>
        </div>
      </div>
  )
}

export default Navbar;
