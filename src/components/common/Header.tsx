import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLists } from "../../assets/data";

interface NavLinkProps {
  path: string;
  url: string;
  onClick?: () => void;
}
const NavLink: React.FC<NavLinkProps> = ({ path, url, onClick }) => (
  <a href={path} className="text-gray-800 hover:text-blue-600 transition-colors duration-300" onClick={onClick}>
    {url}
  </a>
);

// Reusable Logo component
const Logo = () => (
  <div className="logo">
    <img src="../images/common/logo.png" alt="Logo" className="w-32" />
  </div>
);

// Reusable AccountButtons component
const AccountButtons = () => (
  <div className="flex flex-col md:flex-row md:space-x-4 items-center gap-4">
    <button className="relative">
      <GiShoppingCart size={25} />
      <span className="w-4 h-4 bg-primary absolute -top-1 -right-2 text-white flex justify-center items-center rounded-full text-sm">0</span>
    </button>
    <IoIosSearch size={25} />
    <button className="primary-btn">book now</button>
  </div>
);

// Reusable MobileMenu component
interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu?: () => void;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => (
  <nav
    className={`fixed top-0 left-0 w-full capitalize h-screen bg-white flex flex-col items-center justify-center gap-8 text-lg z-[51] transition-transform duration-300 transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    {NavLists.map((list) => (
      <NavLink key={list.id} path={list.path} url={list.url} onClick={toggleMenu} />
    ))}
    {/* <AccountButtons /> */}
  </nav>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll to shrink header and trigger animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Shrinks the header after 50px of scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`fixed top-0 w-full bg-white z-50 transition-all ease-in-out duration-300 ${isScrolled ? "shadow-s1 animate-bounceFromTop py-4" : "py-4"}`}>
      <div className="w-4/5 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Mobile menu toggle button */}
        <button className="block md:hidden text-2xl focus:outline-none relative z-[8000] bg-primary text-white p-2 rounded-md" onClick={toggleMenu}>
          {menuOpen ? <IoMdClose size={25} /> : <RiMenu4Fill size={25} />}
        </button>

        {/* Navigation for desktop */}
        <nav className="hidden md:flex items-center space-x-6 capitalize">
          {NavLists.map((list) => (
            <NavLink key={list.id} path={list.path} url={list.url} />
          ))}
        </nav>

        {/* Account buttons for desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <AccountButtons />
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};
