"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Info = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  useEffect(() => {
    // Verifica si ya se descargó el archivo en esta sesión
    const hasDownloaded = sessionStorage.getItem("anmatDownloaded");
    setIsDownloaded(hasDownloaded === "true");
  }, []);

  const handleDownload = () => {
    // Marca como descargado en sessionStorage
    sessionStorage.setItem("anmatDownloaded", "true");
    setIsDownloaded(true);
  };

  return (
    <div className="flex items-center justify-between p-8">
      {/* Sección izquierda con la imagen */}
      <div className="w-1/2 flex justify-center">
        <Image
          src="/images/anmat.png"
          alt="Logo ANMAT"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Sección derecha con título y botón */}
      <div className="w-1/2 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Estamos habilitados por <span className="text-blue-500">ANMAT</span>
        </h2>
        {!isDownloaded ? (
          <a
            href="/pdf/RenovacionANMAT.pdf"
            download
            onClick={handleDownload}
            className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-gray-100 transition text-center"
          >
            Visualizar
          </a>
        ) : (
          <p className="text-md text-gray-500">Documento descargado.</p>
        )}
      </div>
    </div>
  );
};

export default Info;
