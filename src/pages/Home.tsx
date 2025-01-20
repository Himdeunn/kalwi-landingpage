import React from "react";

const Home: React.FC = () => {
  return (
    <main className="py-48 px-4 lg:px-24 md:px-12 sm:px-6 z-10">
      <div className="text-center space-y-5 px-4">
        <h1 className="text-white text-8xl font-extrabold dark:text-gray-950">
          KalWi
        </h1>
        <p className="text-white text-2xl font-semibold dark:text-gray-950">
          Selamat datang di Landing Page KalWi! Temukan semua informasi terbaru
          tentang server Minecraft kami yang penuh petualangan!
        </p>
        <div className="flex items-center justify-center space-x-5">
          <a
            href=""
            className="text-white text-lg font-semibold bg-gray-900 border border-gray-700 py-3 shadow-xl px-5 rounded-xl hover:bg-gray-800 dark:border-gray-300 dark:bg-white dark:text-gray-950"
          >
            Join Discord
          </a>
          <a
            href=""
            className="text-white text-lg font-semibold bg-gray-900 border border-gray-700 py-3 shadow-xl px-5 rounded-xl hover:bg-gray-800 dark:border-gray-300 dark:bg-white dark:text-gray-950"
          >
            Join Server
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
