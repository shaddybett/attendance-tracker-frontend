// NavBar.js

import React from 'react';
import './NavBar.css'; // Importing CSS file for NavBar styles


function NavBar() {
  return (
    <nav className="navbar">
    <span className='note'>
      Moringa Attendance <br/>
      <span style={{ paddingLeft: '20px' }}>System</span>
</span>

       <span>
        <img  src='./y.png' href="#" alt="User Avatar" className="avatar" />
       </span>
      
      
      <span className="username">John Doe</span>
      {/* Page name */}
     
    </nav>
  );
}

export default NavBar;
