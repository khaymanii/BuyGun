import { useState, useRef } from "react";
import { FaBars, FaTimes, FaUserCircle, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa6";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white max-w-7xl mx-auto py-4 flex items-center justify-between px-2 sm:px-0">
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-white p-5 z-20 flex flex-col justify-between space-y-4 lg:hidden"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Buygun</h2>
              <button onClick={toggleMenu} className="text-5xl">
                ×
              </button>
            </div>
            {/* Search Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <ul className="space-y-4">
              <li className="cursor-pointer">Home</li>

              <li className="relative">
                <div className="flex items-center justify-between cursor-pointer">
                  <span>Shop</span>
                </div>
              </li>

              <li className="relative">
                <div className="flex items-center justify-between cursor-pointer">
                  <span>Product</span>
                </div>
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
                  <FaCartShopping className="text-2xl mr-2" />
                  <span className="text-sm bg-gray-300 rounded-full px-2">
                    2
                  </span>
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
          Buygun
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
          <div className="flex items-center justify-between cursor-pointer">
            <span>Shop</span>
          </div>
        </li>

        <li className="relative">
          <div className="flex items-center justify-between cursor-pointer">
            <span>Product</span>
          </div>
        </li>

        <li className="cursor-pointer">Contact Us</li>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        <FaSearch className="text-xl" />
        <FaUserCircle className="text-xl" />
        <FaCartShopping className="text-xl" />
      </div>

      {/* Mobile Menu Button */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        type="button"
        className="lg:hidden inline-flex items-center w-10 h-10 justify-center text-sm rounded-md focus:outline-none"
      >
        <span className="sr-only">Open main menu</span>
        {isMenuOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
