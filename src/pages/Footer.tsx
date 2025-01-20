import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-white dark:border-gray-300 rounded-xl border border-gray-700 lg:px-10 lg:mx-16 shadow-xl bg-gray-950 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://cdn.discordapp.com/attachments/1323626071047802880/1330788587209359400/logo.png?ex=678f40f4&is=678def74&hm=41f4aef857db6c20d02141d2359b4c2b8c874b431e375fce7a8cbf61e8623597&"
              className="h-10"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-gray-950">
              KalWi
            </span>
          </a>
          <ul className="flex flex-wrap items-center">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-sm text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 font-medium">
                Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-sm text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 font-medium">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-sm text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 font-medium">
                Perks
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900 font-medium">
                Support
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-300 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-between">
          <span className="block text-sm text-white sm:text-center dark:text-gray-950">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              KalWi™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex justify-between items-center space-x-5">
            <a href="" className="border p-2 rounded-xl border-gray-700 dark:border-gray-300 bg-gray-800 dark:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current text-white dark:text-gray-950">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
            </a>
            <a href="" className="border p-2 rounded-xl border-gray-700 dark:border-gray-300 bg-gray-800 dark:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6 fill-current text-white dark:text-gray-950">
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
