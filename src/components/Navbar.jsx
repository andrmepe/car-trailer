import React, { useState, useEffect } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import truck from '../assets/truck.png';

function Navbar({ scrollToSection }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (section) => {
    scrollToSection(section);
    handleMenuClose();
  };

  return (
    <div style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#fff", zIndex: 1000, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={truck} alt="Truck" style={{marginLeft:'10px' ,marginRight: "10px", height: "30px", width: "auto" }} />
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>Truck Company</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {isMobile && (
          <IconButton
            onClick={handleMenuOpen}
            style={{ color: "black", fontSize: "24px", marginRight: "10px" }}
          >
            <MenuIcon />
          </IconButton>
        )}
        {!isMobile && (
          <div style={{ display: "flex", gap: "10px", marginRight:'20px' }}>
            <span onClick={() => handleMenuItemClick('Gallery')}>Gallery</span>
            <span onClick={() => handleMenuItemClick('Contact')}>Contact</span>
            <span onClick={() => handleMenuItemClick('MainPage')}>Main Page</span>
          </div>
        )}
      </div>
      {/* Menú desplegable */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleMenuItemClick('Gallery')}>Gallery</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Contact')}>Contact</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('MainPage')}>Main Page</MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;