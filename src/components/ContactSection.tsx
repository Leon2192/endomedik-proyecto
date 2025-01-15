/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const ContactSection = () => {
  return (
    <>
      {/* Banner */}
      <div className="w-full">
        <img
          src="/images/5.webp"
          alt="Contact Us Banner"
          className="w-full object-cover"
          style={{ height: "400px" }}
        />
      </div>

      {/* Contact Form Section */}
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl text-center text-black">Contacto</h2>
          <p className="mb-8 lg:mb-16  text-center text-gray-500 sm:text-xl">
            Estamos para ayudarte, si tenes una consulta para realizarnos te
            pedimos que completes los campos de este formulario. A la brevedad
            nos pondremos en contacto para ayudarte.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Ingresa tu email..."
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="De que se trata tu consulta..."
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                // rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 sm:w-fit hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
