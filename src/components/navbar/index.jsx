import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUserGraduate, FaTachometerAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // ✅ User state
  const [user, setUser] = useState(true); // false = no user, true = logged in

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarBg =
    isMobile || scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-4";

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaUserGraduate
              className={`text-3xl ${
                isMobile || scrolled ? "text-blue-600" : "text-white"
              }`}
            />
            <span
              className={`text-2xl font-bold ${
                isMobile || scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              EduMaster
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Courses", "Features", "Testimonials", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium hover:text-blue-500 transition-colors ${
                  isMobile || scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            {user ? (
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all cursor-pointer hover:scale-105 ${
                  isMobile || scrolled
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-white text-green-600 hover:bg-green-600 hover:text-white"
                }`}
              >
                <FaTachometerAlt /> Student Dashboard
              </button>
            ) : (
              <button
                className={`px-6 py-2 rounded-full font-semibold transition-all cursor-pointer hover:scale-105 ${
                  isMobile || scrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                Join Now
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-2xl ${
              isMobile || scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes color="red" cursor={"pointer"} /> : <FaBars color="blue" cursor={"pointer"} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 mt-4">
            {["Home", "Courses", "Features", "Testimonials", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium hover:text-blue-600 transition-colors text-gray-700`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}

            {user ? (
              <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full w-fit">
                <FaTachometerAlt /> Student Dashboard
              </button>
            ) : (
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full w-fit">
                Join Now
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
