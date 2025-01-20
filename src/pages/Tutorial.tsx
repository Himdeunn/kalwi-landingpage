import React from "react";

const Tutorial: React.FC = () => {
  return (
    <main className="py-12 px-4 lg:px-32 md:px-12 sm:px-6 z-10">
      <div className="p-6 border dark:border-gray-300 border-gray-700 rounded-xl">
        {/* header + slogan */}
        <h1 className="text-center text-white mb-5 text-5xl font-semibold dark:text-gray-950">
          Tutorial Server.
        </h1>
        <p className="text-center text-gray-300 text-xl lg:px-32 font-normal dark:text-gray-950">
          Pelajari cara bermain di server kami dengan mudah, dibawah ini ada 2 tombol untuk tutorial cara donasi dan tutorial cara bermain atau join server.
        </p>

        {/* button */}
        <div className="flex items-center justify-center space-x-5 mt-10">
          <a
            href=""
            className="text-white lg:text-lg sm:text-md font-semibold bg-gray-900 border border-gray-700 py-3 shadow-xl px-5 rounded-xl hover:bg-gray-800 dark:border-gray-300 dark:bg-white dark:text-gray-950"
          >
            Tutorial Donasi
          </a>
          <a
            href=""
            className="text-white lg:text-lg sm:text-md font-semibold bg-gray-900 border border-gray-700 py-3 shadow-xl px-5 rounded-xl hover:bg-gray-800 dark:border-gray-300 dark:bg-white dark:text-gray-950"
          >
            Tutorial Join
          </a>
        </div>
      </div>
    </main>
  );
};

export default Tutorial;
