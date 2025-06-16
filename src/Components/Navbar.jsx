import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 p-3">
      <div className="flex justify-around items-center">
        <div className="flex items-center space-x-3 text-white font-bold text-xl select-none">
  <NavLink to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300">
    <img
      src="/FullLogo_NoBuffer.png"
      alt="Web logo"
      className="w-9 h-12 object-cover rounded-md shadow-md"
    />
    <span className="text-2xl font-extrabold tracking-wide drop-shadow-md select-text">
      PassGen
    </span>
  </NavLink>
</div>


        {/* Mobile menu button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-white">
          <NavLink to="/about">About</NavLink>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="flex flex-col mt-2 text-center space-y-2 text-white md:hidden">
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
