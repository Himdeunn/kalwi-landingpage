import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for theme preference
    return localStorage.getItem("theme") === "dark" || false;
  });

  useEffect(() => {
    // Update the `data-theme` attribute in the root HTML element
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className="sticky top-5 z-50 space-y-3 mx-2 lg:mx-5 md:mx-3 sm:mx-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-lg bg-opacity-50 p-2 rounded-xl dark:bg-white border border-gray-700 dark:border-gray-300">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900"
            >
              Kalwi
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#features"
              className="text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 font-medium"
            >
              Discord
            </a>
            <a
              href="#store"
              className="text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 font-medium"
            >
              Store
              <span className="bg-blue-500 text-gray-900 dark:text-white py-1 px-3 ml-1 rounded-full text-sm">
                30%
              </span>
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 font-medium"
            >
              Guides
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 font-medium"
            >
              Support
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {/* button dark/light mode */}
            <button
              className="bg-gray-900 p-2 rounded-xl border-2 border-gray-700 dark:bg-white dark:border-gray-300 shadow-sm"
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6"
                >
                  <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="w-6 h-6"
                >
                  <path
                    fill="#ffffff"
                    d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                  />
                </svg>
              )}
            </button>
            
            {/* button vote */}
            <a
              href="#get-started"
              className="bg-gray-900 p-2 rounded-xl border-2 border-gray-700 dark:bg-white dark:border-gray-300 shadow-sm"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6"
                >
                  <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6"
                >
                  <path
                    fill="#ffffff"
                    d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z"
                  />
                </svg>
              )}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* button dark mode */}
            <button
              className="bg-gray-900 p-2 rounded-xl border-2 border-gray-700 dark:bg-white dark:border-gray-300 shadow-sm"
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6"
                >
                  <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="w-6 h-6"
                >
                  <path
                    fill="#ffffff"
                    d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                  />
                </svg>
              )}
            </button>

            {/* button toggle mobile */}
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 p-2 rounded-xl border-2 border-gray-700 dark:bg-white dark:border-gray-300 shadow-sm"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                // Icon X
                <>
                  {/* Icon X untuk Dark Mode */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="h-6 w-6 transform transition-transform text-gray-800 dark:hidden"
                  >
                    <path fill="#ffffff" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8-9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                  </svg>
                  {/* Icon X untuk Light Mode */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="h-6 w-6 transform transition-transform hidden dark:block"
                  >
                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8-9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                    />
                  </svg>
                </>
              ) : (
                // Icon Bars
                <>
                  {/* Icon Bars untuk Dark Mode */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-6 w-6 transform transition-transform text-gray-800 dark:hidden"
                  >
                    <path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                  {/* Icon Bars untuk Light Mode */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-6 w-6 transform transition-transform hidden dark:block"
                  >
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`transform transition-all duration-500 ease-in-out backdrop-blur-lg bg-opacity-75 p-2 rounded-xl dark:bg-white border border-gray-700 dark:border-gray-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#discord"
            className="block hover:bg-gray-800 rounded-xl dark:hover:bg-gray-300 px-4 py-2 text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 font-medium"
          >
            Discord
          </a>
          <a
            href="#store"
            className="block hover:bg-gray-800 rounded-xl dark:hover:bg-gray-300 px-4 py-2 text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 font-medium"
          >
            Store
            <span className="items-right bg-blue-500 text-gray-900 dark:text-white py-1 px-3 ml-1 rounded-full text-sm">
              30%
            </span>
          </a>
          <a
            href="#guides"
            className="block hover:bg-gray-800 rounded-xl dark:hover:bg-gray-300 px-4 py-2 text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 font-medium"
          >
            Guides
          </a>
          <a
            href="#support"
            className="block hover:bg-gray-800 rounded-xl dark:hover:bg-gray-300 px-4 py-2 text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 font-medium"
          >
            Support
          </a>
          <a
            href="#get-started"
            className="block hover:bg-gray-800 dark:hover:bg-gray-300 bg-gray-900 py-2 px-4 text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 rounded-xl border-2 border-gray-700 dark:bg-white dark:border-gray-300 shadow-sm"
          >
            Vote Now!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
