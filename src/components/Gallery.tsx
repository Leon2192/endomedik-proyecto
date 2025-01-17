/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  especialidades,
  ImagesEspecialidades,
  ImagesSlider,
  sliderTexts,
} from "@/constants";

const Gallery = () => {
  return (
    <div>
      <section id="Gallery" className="py-12">
        <div className="mx-auto mb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 1 },
            }}
            className="w-full"
          >
            {ImagesSlider.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden shadow-lg">
                  {/* Fondo oscuro encima de la imagen */}
                  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                  <img
                    src={src}
                    alt={`Slides ${index + 1}`}
                    className="w-full object-cover transition-transform duration-300 hover:scale-105"
                    style={{ height: "600px" }}
                  />
                  {/* Texto sobre la imagen */}
                  <div className="absolute inset-0 flex items-center justify-left z-20">
                    <p className="text-white text-5xl font-bold text-center px-4 mx-12">
                      {sliderTexts[index]}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h2 className="text-3xl text-center font-bold text-black mb-6">
          Especialidades
        </h2>

        <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {ImagesEspecialidades.map((src, index) => (
            <div key={index} className="relative group">
              <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer relative">
                {/* Imagen */}
                <img
                  src={src}
                  alt={`Slides ${index + 1}`}
                  className="w-full h-24 object-cover transition-transform duration-300 group-hover:opacity-75 group-hover:scale-105"
                  style={{ height: "400px" }}
                />
                {/* Oscurecimiento del fondo */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300 text-white text-xl font-bold">
                  <p className="text-3xl">{especialidades[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
