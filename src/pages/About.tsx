import React from "react";
import ProductImage from '../assets/img/product-image.png';

const About: React.FC = () => {
  return (
    <main className="py-12 px-4 lg:px-22 md:px-12 sm:px-6 z-10">
      <div className="px-4">

        {/* header + slogan */}
        <h1 className="text-center text-white mb-5 text-3xl lg:text-5xl font-semibold dark:text-gray-950">
          Meningkatkan pengalaman bermainmu di server!
        </h1>
        <p className="text-center text-gray-300 text-xl lg:px-64 font-normal dark:text-gray-950">
          Kami menyediakan fitur-fitur yang akan membantu kamu dalam bermain di
          server kami. Banyaknya gamemode seperti Survival, AcidIsland,
          OneBlock, dan masih banyak lagi.
        </p>

        {/* cta card */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-10">
            {/* card 1 */}
            <div className="flex p-4 border border-gray-700 dark:border-gray-300 bg-gray-950 shadow-xl rounded-xl space-x-4 dark:bg-white">
                <div className="p-3 border border-gray-700 dark:border-gray-300 bg-gray-900 rounded-xl dark:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current text-white dark:text-gray-950">
                        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3L280 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                    </svg>
                </div>
                <span className="flex items-center text-white dark:text-gray-950 sm:text-sm md:text-md lg:text-lg">Ping Dijamin Rendah</span>
            </div>

            {/* card 2 */}
            <div className="flex p-4 border border-gray-700 dark:border-gray-300 bg-gray-950 shadow-xl rounded-xl space-x-4 dark:bg-white">
                <div className="p-3 border border-gray-700 dark:border-gray-300 bg-gray-900 rounded-xl dark:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-6 h-6 fill-current text-white dark:text-gray-950">
                        <path d="M45.6 32C20.4 32 0 52.4 0 77.6L0 434.4C0 459.6 20.4 480 45.6 480c5.1 0 10-.8 14.7-2.4C74.6 472.8 177.6 440 320 440s245.4 32.8 259.6 37.6c4.7 1.6 9.7 2.4 14.7 2.4c25.2 0 45.6-20.4 45.6-45.6l0-356.7C640 52.4 619.6 32 594.4 32c-5 0-10 .8-14.7 2.4C565.4 39.2 462.4 72 320 72S74.6 39.2 60.4 34.4C55.6 32.8 50.7 32 45.6 32zM96 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm272 0c7.9 0 15.4 3.9 19.8 10.5L512.3 353c5.4 8 5.6 18.4 .4 26.5s-14.7 12.3-24.2 10.7C442.7 382.4 385.2 376 320 376c-65.6 0-123.4 6.5-169.3 14.4c-9.8 1.7-19.7-2.9-24.7-11.5s-4.3-19.4 1.9-27.2L197.3 265c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l26.4 33.1 87-127.6c4.5-6.6 11.9-10.5 19.8-10.5z"/>
                    </svg>
                </div>
                <span className="flex items-center text-white dark:text-gray-950 sm:text-sm md:text-md lg:text-lg">GUI Yang Mudah Dimengerti</span>
            </div>

            {/* card 3 */}
            <div className="flex p-4 border border-gray-700 dark:border-gray-300 bg-gray-950 shadow-xl rounded-xl space-x-4 dark:bg-white">
                <div className="p-3 border border-gray-700 dark:border-gray-300 bg-gray-900 rounded-xl dark:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6 fill-current text-white dark:text-gray-950">
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    </svg>
                </div>
                <h1 className="flex items-center justify-between text-white dark:text-gray-950 sm:text-sm md:text-md lg:text-lg">
                    Banyak Fitur & Item Menarik
                    <span className="bg-blue-400 py-1 px-3 rounded-xl sm:text-sm md:text-md lg:text-lg ml-2">New!</span>
                </h1>
            </div>
        </div>

        {/* image */}
        <div className="mt-10 border p-2 rounded-xl border-gray-700 dark:border-gray-300 shadow-xl">
            <img src={ProductImage} className="w-full rounded-xl" alt="" />
        </div>
      </div>
    </main>
  );
};

export default About;
