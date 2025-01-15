/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Gallery = () => {
  const Images = [
    "/images/1.png",
    "/images/2.jpg",
    "/images/5.webp",
    "/images/6.jpg",
    "/images/10.avif",
    "/images/12.avif",
  ];

  const sliderTexts = [
    "TECNOLOGIA DE PUNTA PARA CADA PROCEDIIENTO",
    "OFRECEMOS ATENCION PERSONALIZADA Y DE CALIDAD",
    "CONOCE NUESTRAS ESPECIALIDADES",
    "SOMOS ESPECIALISTAS EN MEDICINA AVANZADA",
    "NOS REPRESENTA LA CONFIANZA Y COMPROMISO",
    "RESPETO A LAS PERSONAS Y TRABAJO EN EQUIPO",
  ];

  const especialidades = [
    "Gastroenterologia",
    "Hernioplastia",
    "Mucosectomia",
    "CPRE",
    "Ecoendoscopia guiada",
    "Bronquial",
  ];

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
            {Images.map((src, index) => (
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

        <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Images.map((src, index) => (
            <div key={index} className="relative group">
              <div className="overflow-hidden rounded-lg shadow-lg group-hover:bg-opacity-75 transition duration-300 cursor-pointer">
                <img
                  src={src}
                  alt={`Slides ${index + 1}`}
                  className="w-full h-24 object-cover transition-transform duration-300 group-hover:opacity-75 group-hover:scale-105"
                  style={{ height: "400px" }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 text-white text-xl font-bold">
                  <p>{especialidades[index]}</p>
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
