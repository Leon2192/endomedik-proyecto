"use client";
import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
      <h3 className="text-2xl font-semibold text-gray-700">
          Oooops!! Página no encontrada
        </h3>
        <div className="relative w-96 h-96 mx-auto">
          <Image
            src="/images/notfound.png"
            alt="Página no encontrada"
            layout="fill"
            objectFit="contain"
          />
        </div>
      
      </div>
    </div>
  );
};

export default NotFound;
