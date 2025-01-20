import React from "react";

const Carousel: React.FC = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 space-y-4 mt-12 max-sm:max-w-md max-sm:mx-auto">
      {/* card 1 */}
      <div className="break-inside-avoid p-6 rounded-lg bg-gray-950 dark:bg-white shadow-xl border border-gray-700 dark:border-gray-300">
        <div className="flex items-center">
          <img
            src="https://readymadeui.com/team-1.webp"
            className="w-11 h-11 rounded-full"
          />
          <div className="ml-4">
            <h4 className="text-white dark:text-gray-950 text-sm font-semibold">
              John Doe
            </h4>
            <p className="mt-0.5 text-xs text-gray-400">Founder of Rubik</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-white dark:text-gray-950 text-sm leading-relaxed">
            Server Minecraft di Kalwi benar-benar keren! Kualitasnya stabil dan
            jarang lag. Sangat menyenangkan bermain di sini.
          </p>
        </div>

        <div className="flex space-x-1 mt-4">
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-4 fill-[#CED5D8]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-4 fill-[#CED5D8]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
      </div>

      {/* card 2 */}
      <div className="break-inside-avoid p-6 rounded-lg bg-gray-950 dark:bg-white shadow-xl border border-gray-700 dark:border-gray-300">
        <div className="flex items-center">
          <img
            src="https://readymadeui.com/team-2.webp"
            className="w-11 h-11 rounded-full"
          />
          <div className="ml-4">
            <h4 className="text-white dark:text-gray-950 text-sm font-semibold">
              Mark Adair
            </h4>
            <p className="mt-0.5 text-xs text-gray-400">Founder of Alpha</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-white dark:text-gray-950 text-sm leading-relaxed">
            Pengalaman bermain di server Kalwi luar biasa! Banyak mini-games
            seru dan komunitas yang ramah.
          </p>
        </div>

        <div className="flex space-x-1 mt-4">
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
      </div>

      {/* card 3 */}
      <div className="break-inside-avoid p-6 rounded-lg bg-gray-950 dark:bg-white shadow-xl border border-gray-700 dark:border-gray-300">
        <div className="flex items-center">
          <img
            src="https://readymadeui.com/team-3.webp"
            className="w-11 h-11 rounded-full"
          />
          <div className="ml-4">
            <h4 className="text-white dark:text-gray-950 text-sm font-semibold">
              Simon Konecki
            </h4>
            <p className="mt-0.5 text-xs text-gray-400">Founder of Labar</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-white dark:text-gray-950 text-sm leading-relaxed">
            Fitur-fiturnya
            sangat kreatif dan inovatif, membuat setiap sesi bermain terasa baru
            dan menarik. Server ini juga memiliki sistem ekonomi yang
            terintegrasi dengan baik, sehingga memungkinkan pemain untuk
            melakukan perdagangan dan mengembangkan dunia mereka sendiri.
          </p>
        </div>

        <div className="flex space-x-1 mt-4">
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-4 fill-[#CED5D8]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
      </div>

      {/* card 4 */}
      <div className="break-inside-avoid p-6 rounded-lg bg-gray-950 dark:bg-white shadow-xl border border-gray-700 dark:border-gray-300">
        <div className="flex items-center">
          <img
            src="https://readymadeui.com/team-4.webp"
            className="w-11 h-11 rounded-full"
          />
          <div className="ml-4">
            <h4 className="text-white dark:text-gray-950 text-sm font-semibold">
              Emma Wilson
            </h4>
            <p className="mt-0.5 text-xs text-gray-400">COO of NextGen</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-white dark:text-gray-950 text-sm leading-relaxed">
            Admin di server Kalwi sangat responsif dan selalu siap membantu.
            Pelayanannya top banget!
          </p>
        </div>

        <div className="flex space-x-1 mt-4">
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
      </div>

      {/* card 5 */}
      <div className="break-inside-avoid p-6 rounded-lg bg-gray-950 dark:bg-white shadow-xl border border-gray-700 dark:border-gray-300">
        <div className="flex items-center">
          <img
            src="https://readymadeui.com/team-5.webp"
            className="w-11 h-11 rounded-full"
          />
          <div className="ml-4">
            <h4 className="text-white dark:text-gray-950 text-sm font-semibold">
              Lucas Brown
            </h4>
            <p className="mt-0.5 text-xs text-gray-400">Founder of Lumina</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-white dark:text-gray-950 text-sm leading-relaxed">
            Server Minecraft Kalwi punya banyak event menarik yang bikin saya
            betah bermain berjam-jam. Pasti akan terus jadi member setia!
          </p>
        </div>

        <div className="flex space-x-1 mt-4">
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
      </div>

      {/* card 6 */}
      <div className="break-inside-avoid p-6 rounded-lg bg-gray-950 dark:bg-white shadow-xl border border-gray-700 dark:border-gray-300">
        <div className="flex items-center">
          <img
            src="https://readymadeui.com/team-6.webp"
            className="w-11 h-11 rounded-full"
          />
          <div className="ml-4">
            <h4 className="text-white dark:text-gray-950 text-sm font-semibold">
              Anna Smith
            </h4>
            <p className="mt-0.5 text-xs text-gray-400">CEO of BrightTech</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-white dark:text-gray-950 text-sm leading-relaxed">
            Dari semua server Minecraft yang pernah saya coba, Kalwi adalah yang
            terbaik. Kualitas, fitur, dan komunitasnya luar biasa.
          </p>
        </div>

        <div className="flex space-x-1 mt-4">
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-3.5 h-3.5 fill-blue-600"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
