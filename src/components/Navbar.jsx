import React from "react";

function Navbar({ scrollToSection }) {
  
  return (
    <div style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#fff", zIndex: 1000 }}>
      <button onClick={() => scrollToSection('Gallery')}>Gallery</button>
      <button onClick={() => scrollToSection('Contact')}>Contact</button>
      <button onClick={() => scrollToSection('MainPage')}>Main Page</button>
    </div>
  )
}

export default Navbar