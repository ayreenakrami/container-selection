import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between t-0">
      <img src={logo} alt="Logo" className="h-8"/>
    </header>
  );
}

export default Header;