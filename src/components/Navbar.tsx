"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú en móviles
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Div pequeño en la parte superior */}
      <div className="bg-gray-50 text-gray-700 flex items-center justify-end py-2 px-4 space-x-2">
        <a href="/contact" className="text-gray-700 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </a>
        <span>
          <a
            href="mailto:ventas@endomedik.com.ar"
            className="text-gray-600 hover:text-gray-900 underline"
          >
            ventas@endomedik.com.ar
          </a>
        </span>
      </div>

      <nav className="w-full bg-transparent shadow-lg">
        <div className="container flex mx-auto items-center justify-between p-4">
           {/* Sección del logo y título */}
           <div className="flex items-center space-x-4">
            <Link href="/" passHref>
              <div className="relative h-24 w-24 cursor-pointer">
                <Image
                  src="/brand/logo-endomedik.png"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>

          {/* Botón de menú hamburguesa en dispositivos móviles */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Sección de navegación, visible en escritorio y en móviles cuando el menú está abierto */}
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-6`}
          >
            <li>
              <Link
                href="/"
                className="text-black relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="text-black relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/Contacto"
                className="text-black relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
