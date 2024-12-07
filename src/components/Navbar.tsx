import { useState, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaUserCircle, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa6";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleDropdown2 = () => setIsDropdownOpen2((prev) => !prev);

  return (
    <nav className="bg-white p-4 flex items-center justify-between">


       {/* Mobile Menu */}
       {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-white p-5 z-20 flex flex-col justify-between space-y-4 lg:hidden"
        >
     <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
    <h2 className="text-3xl font-bold">BuyGun.</h2>
    <button onClick={toggleMenu} className="text-5xl">&times;</button>
        </div>
          {/* Search Input */}
        <div className="mb-4">
    <input
      type="text"
      placeholder="Search"
      className="w-full px-4 py-2 border rounded-md"
    />
        </div>
        <ul className="space-y-4 font-semibold">
            <li className="cursor-pointer">Home</li>

            <li className="relative">
              <div
                onClick={toggleDropdown}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>Shop</span>
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {isDropdownOpen && (
                <div className="bg-gray-100 shadow-lg rounded-lg p-4 mt-2">
                  <ul className="flex flex-col gap-2">
                    <li className="hover:bg-gray-200 p-2 rounded">Option 1</li>
                    <li className="hover:bg-gray-200 p-2 rounded">Option 2</li>
                    <li className="hover:bg-gray-200 p-2 rounded">Option 3</li>
                  </ul>
                </div>
              )}
            </li>

            <li className="relative">
              <div
                onClick={toggleDropdown2}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>Product</span>
                {isDropdownOpen2 ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {isDropdownOpen2 && (
                <div className="bg-gray-100 shadow-lg rounded-lg p-4 mt-2">
                  <ul className="flex flex-col gap-2">
                    <li className="hover:bg-gray-200 p-2 rounded">Ak Guns</li>
                    <li className="hover:bg-gray-200 p-2 rounded">Armoured Car</li>
                    <li className="hover:bg-gray-200 p-2 rounded">CoboyGun</li>
                    <li className="hover:bg-gray-200 p-2 rounded">Pistol</li>
                    <li className="hover:bg-gray-200 p-2 rounded">Barreta</li>
                    <li className="hover:bg-gray-200 p-2 rounded">Glock</li>
                    <li className="hover:bg-gray-200 p-2 rounded">Savage Gun</li>
                    <li className="hover:bg-gray-200 p-2 rounded">Bullets</li>
                  </ul>
                </div>
              )}
            </li>

            <li className="cursor-pointer">Contact Us</li>
        </ul>
     </div>

      <div className="flex flex-col gap-5">
           {/* Cart and Wishlist */}
     <div className="flex flex-col justify-between">
    <div className="flex flex-row items-center justify-between">
      <span className="text-[15px] font-semibold">Cart</span>
      <div className="flex flex-row items-center">
      <FaCartShopping />
      <span className="text-sm bg-gray-300 rounded-full px-2">2</span>
      </div>
    </div>
    <div className="flex flex-row items-center justify-between">
      <span className="text-[15px] font-semibold">Wishlist</span>
      <div className="flex flex-row items-center">
      <FaHeart />
      <span className="text-sm bg-gray-300 rounded-full px-2">2</span>
      </div>
    </div>
           </div>

             {/* Sign In Button */}
     <button className="w-full mt-5 py-2 bg-black text-white font-semibold rounded-md">
    Sign In
          </button>

             {/* Social Media Links */}
     <div className="flex justify-center gap-6 text-xl mt-5">
    <FaInstagram />
    <FaFacebook />
    <FaYoutube />
           </div>
    </div>

        </div>
      )}


      {/* Logo Section */}
      <div className="flex items-center">
        <a href="/" className="text-3xl font-semibold">
          BuyGun.
        </a>
      </div>

      {/* Main Menu */}
      <ul
        className={`flex-1 items-center justify-center space-x-6 font-semibold lg:flex ${
          isMenuOpen ? "flex-col lg:flex-row lg:static" : "hidden lg:flex"
        }`}
      >
        <li className="cursor-pointer">Home</li>

        <li className="relative">
          <div
            onClick={toggleDropdown}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>Shop</span>
            {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-lg rounded-lg p-4 w-48 mt-2 z-10">
              <ul className="flex flex-col gap-2">
                <li className="hover:bg-gray-200 p-2 rounded">Option 1</li>
                <li className="hover:bg-gray-200 p-2 rounded">Option 2</li>
                <li className="hover:bg-gray-200 p-2 rounded">Option 3</li>
              </ul>
            </div>
          )}
        </li>

        <li className="relative">
          <div
            onClick={toggleDropdown2}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>Product</span>
            {isDropdownOpen2 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isDropdownOpen2 && (
            <div className="absolute bg-white shadow-lg rounded-lg p-4 w-48 mt-2 z-10">
              <ul className="flex flex-col gap-2">
                <li className="hover:bg-gray-200 p-2 rounded">Ak Guns</li>
                <li className="hover:bg-gray-200 p-2 rounded">Armoured Car</li>
                <li className="hover:bg-gray-200 p-2 rounded">CoboyGun</li>
                <li className="hover:bg-gray-200 p-2 rounded">Pistol</li>
                <li className="hover:bg-gray-200 p-2 rounded">Barreta</li>
                <li className="hover:bg-gray-200 p-2 rounded">Glock</li>
                <li className="hover:bg-gray-200 p-2 rounded">Savage Gun</li>
                <li className="hover:bg-gray-200 p-2 rounded">Bullets</li>
              </ul>
            </div>
          )}
        </li>

        <li className="cursor-pointer">Contact Us</li>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        <FaSearch />
        <FaUserCircle />
        <FaCartShopping />
      </div>

      {/* Mobile Menu Button */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        type="button"
        className="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-md hover:bg-gray-100 focus:outline-none"
      >
        <span className="sr-only">Open main menu</span>
        {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

     
    </nav>
  );
}

export default Navbar;
