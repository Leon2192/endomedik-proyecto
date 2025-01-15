"use client";

import Image from "next/image";

const Section = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-8 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          LA EMPRESA
        </h2>
        <p className="text-gray-600 text-center text-xl leading-relaxed max-w-5xl mx-auto">
          En ENDOMEDIK nos comprometemos a comercialiizar insumos medicos
          destinados a las areas de endoscopia digestiva, urologia, dialisis,
          cirugia general, aprobados por la Autoridad Sanitaria competente,
          mediante un servicio y controles que satisfagan y superen las
          necesidades de nuestros clientes, todos y cada uno de los trabajadores
          de la empresa nos esforzamos constantemente para atender de manera
          especializada y precisa a nuestros clientes, por medio de la
          capacitacion constante, supervision y cumplimiento de las actividades
          de todos y cada uno de los miembros de ENDOMEDIK como parte del
          sistema de atencion de salud.
        </p>
      </div>

      <div className="flex justify-center my-8">
        <div className="w-1/6 h-1 bg-gray-300 rounded"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-50 p-8 space-y-8 md:space-y-0">
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full h-64 md:h-auto">
            <Image
              src="/images/2.jpg"
              alt="Logo"
              layout="responsive" // Esto asegura que la imagen sea responsive
              width={1000} // Establecer el ancho como el valor máximo
              height={600} // Establecer la altura proporcional
              className="object-cover w-full h-full" // Asegura que la imagen cubra todo el área
            />
          </div>
        </div>

        {/* Columna izquierda */}
        <div className="flex flex-col flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Misión
          </h2>
          <p className="text-gray-600 text-center text-2xl text-center mx-8">
            Mantener y mejorar la calidad de vida mediante la comercializacion
            de productos medicos seguros e insumos para la salud brindando
            siempre un servicio honesto, amable y respetuoso que contribuya en
            generar confianza y seguridad en nuestros clientes.
          </p>
        </div>
      </div>

      <div className="flex justify-center my-8">
        <div className="w-1/6 h-1 bg-gray-300 rounded"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-50 p-8 space-y-8 md:space-y-0">
        {/* Columna izquierda */}
        <div className="flex flex-col flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Visión
          </h2>
          <p className="text-gray-600 text-center mx-8 text-2xl">
            Ser una empresa en constante renovacion que provea el bienestar de
            nuestro personal como compromiso de todos los que integran la
            empresa, garantizando la permanencia y el liderazgo reconocido por
            el mercado.
          </p>
        </div>

        {/* Columna derecha */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full h-64 md:h-auto">
            <Image
              src="/images/5.webp"
              alt="Logo"
              layout="responsive"
              width={1000}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center my-8">
        <div className="w-1/6 h-1 bg-gray-300 rounded"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-50 p-8 space-y-8 md:space-y-0">
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full h-64 md:h-auto">
            <Image
              src="/images/6.jpg"
              alt="Logo"
              layout="responsive"
              width={1000}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Columna izquierda */}
        <div className="flex flex-col flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Valores
          </h2>
          <p className="text-gray-600 text-center text-2xl text-center mx-8">
            El respeto por la vida, la salud, actitud de servicio, respeto a las
            personas, trabajo en equipo, dedicacion al trabajo, prudencia,
            responsabilidad, honestidad, lealtad, humildad, limpieza y
            puntualidad.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section;
