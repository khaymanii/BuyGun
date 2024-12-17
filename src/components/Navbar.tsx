import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { currentUser, loading } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show loading state while waiting for auth state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <nav
      className={`bg-white max-w-7xl mx-auto py-4 flex items-center justify-between px-2 sm:px-4 sticky top-0 z-50
        ${
          isScrolled ? "border-b shadow-md" : "border-b-0"
        } transition-all duration-300`}
    >
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-white p-5 z-20 flex flex-col justify-between space-y-4 lg:hidden"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="lg:text-3xl text-2xl font-semibold">Buygun</h2>
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
              <li className="cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="relative">
                <div className="flex items-center justify-between cursor-pointer">
                  <Link to="/shop">
                    <span>Shop</span>
                  </Link>
                </div>
              </li>
              <li className="relative">
                <div className="flex items-center justify-between cursor-pointer">
                  <Link to="/cart">
                    <span>Cart</span>
                  </Link>
                </div>
              </li>
              <li className="cursor-pointer">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            {/* Cart and Wishlist */}
            <div className="flex flex-col justify-between">
              <div className="flex flex-row items-center justify-between">
                <span className="text-[15px] font-semibold">Cart</span>
                <div className="flex flex-row items-center">
                  <FaCartShopping className="text-2xl mr-1" />
                  <span className="text-sm bg-red-500 w-5 h-5 text-center flex items-center justify-center rounded-full  text-white">
                    2
                  </span>
                </div>
              </div>
            </div>

            {/* Sign In Button */}
            <button className="w-full mt-5 py-2 bg-black text-white font-semibold rounded-md">
              <Link to="/signin">Sign In</Link>
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
        <a href="/" className="lg:text-3xl text-2xl font-semibold">
          Buygun
        </a>
      </div>

      {/* Main Menu */}
      <ul
        className={`flex-1 items-center justify-center space-x-6 font-semibold lg:flex ${
          isMenuOpen ? "flex-col lg:flex-row lg:static" : "hidden lg:flex"
        }`}
      >
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="relative">
          <div className="flex items-center justify-between cursor-pointer">
            <Link to="/shop">
              <span>Shop</span>
            </Link>
          </div>
        </li>
        <li className="relative">
          <div className="flex items-center justify-between cursor-pointer">
            <Link to="/cart">
              <span>Cart</span>
            </Link>
          </div>
        </li>
        <li className="cursor-pointer">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <FaCartShopping className="text-xl" />
          <span className="text-sm bg-red-500 w-5 h-5 text-center flex items-center justify-center rounded-full text-white">
            2
          </span>
        </div>

        <div className="flex items-center gap-1">
          {" "}
          <FaUserCircle className="text-xl" />
          {currentUser ? (
            <p className="text-sm">
              {currentUser.displayName || currentUser.email}!
            </p>
          ) : (
            <p className="text-sm">Ken</p>
          )}
        </div>
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
