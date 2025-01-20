import React from "react";
import Carousel from "../components/Carousel";

const Testimonial: React.FC = () => {

  return (
    <main className="py-12 px-4 lg:px-22 md:px-12 sm:px-6 z-10">
      <div className="px-4">
        {/* header + slogan */}
        <h1 className="text-center text-white mb-5 text-5xl font-semibold dark:text-gray-950">
          Testimonial Pengalaman.
        </h1>
        <p className="text-center text-gray-300 text-xl font-normal dark:text-gray-950">
          Berikut adalah pengalaman nyata yang dirasakan oleh para pemain di
          server kami!
        </p>

        {/* Testimonial Carousel */}
        <div className="max-w-6xl max-lg:max-w-3xl mx-auto">
          <Carousel />
        </div>

      </div>
    </main>
  );
};

export default Testimonial;
